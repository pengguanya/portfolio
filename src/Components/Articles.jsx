import React, { useState, useEffect } from "react";
import { formatCategoryName } from "../utils/formatters";

const Articles = ({ theme }) => {
  const [categorizedArticles, setCategorizedArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isLight = theme === "light";

  useEffect(() => {
    // Fetch the XML feed directly since GitHub Pages supports CORS
    const feedUrl = "https://pengguanya.github.io/feed.xml";

    fetch(feedUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((str) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, "text/xml");
        const entries = Array.from(xmlDoc.querySelectorAll("entry"));

        const items = entries.map((entry) => {
          const title = entry.querySelector("title")?.textContent || "";
          const link = entry.querySelector("link[rel='alternate']")?.getAttribute("href") || "";
          const pubDate = entry.querySelector("published")?.textContent || "";
          const description = entry.querySelector("summary")?.textContent || entry.querySelector("content")?.textContent || "";
          const guid = entry.querySelector("id")?.textContent || link;
          
          const categories = Array.from(entry.querySelectorAll("category")).map(cat => cat.getAttribute("term"));

          return {
            title,
            link,
            pubDate,
            description,
            guid,
            categories
          };
        });

        // 1. Build a map of Category -> Set of Item GUIDs to understand the hierarchy
        const categoryMap = {};
        items.forEach((item) => {
          const categories = item.categories || [];
          categories.forEach((cat) => {
            if (!categoryMap[cat]) {
              categoryMap[cat] = new Set();
            }
            categoryMap[cat].add(item.guid);
          });
        });

        // 2. Group articles by their most specific category
        const groups = {};
        
        // Step 2a: Detect if there is a common "Root" category (like "Blogging")
        // that appears at the start of almost every article's category list.
        const rootCounts = {};
        items.forEach(item => {
          if (item.categories && item.categories.length > 0) {
            const root = item.categories[0];
            rootCounts[root] = (rootCounts[root] || 0) + 1;
          }
        });

        let globalRoot = null;
        const totalItems = items.length;
        
        // If a single category appears as the root in > 80% of articles, treat it as a global root to be ignored.
        for (const [root, count] of Object.entries(rootCounts)) {
          if (count > totalItems * 0.8) {
            globalRoot = root;
            break;
          }
        }

        items.forEach((item) => {
          let categories = item.categories || [];
          let mainCategory = "General";

          if (categories.length > 0) {
            // If the first category is the detected global root (e.g. "Blogging"),
            // we prefer the second category as the "real" main category.
            if (globalRoot && categories[0] === globalRoot && categories.length > 1) {
              mainCategory = categories[1];
            } else {
              // Otherwise, just use the first category
              mainCategory = categories[0];
            }
          }

          if (!groups[mainCategory]) {
            groups[mainCategory] = [];
          }
          if (!groups[mainCategory].some((existing) => existing.guid === item.guid)) {
            groups[mainCategory].push(item);
          }
        });
        
        setCategorizedArticles(groups);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError("Failed to load articles.");
        setLoading(false);
      });
  }, []);

  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      width: "100%",
    },
    card: {
      backgroundColor: "var(--bg-card)",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 6px -1px var(--shadow-color), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      border: "1px solid var(--border-color)",
    },
    cardContent: {
      padding: "1.5rem",
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "var(--text-title)",
    },
    cardDate: {
      fontSize: "0.875rem",
      color: "var(--text-date)",
      marginBottom: "1rem",
    },
    cardExcerpt: {
      fontSize: "1rem",
      color: "var(--text-primary)",
      lineHeight: "1.5",
      flex: 1,
    },
    loading: {
      textAlign: "center",
      fontSize: "1.2rem",
      color: "var(--text-date)",
    },
    categorySection: {
      width: "100%",
      marginBottom: "4rem",
    },
    categoryTitle: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      color: "var(--text-title)",
      borderBottom: "2px solid var(--border-color)",
      paddingBottom: "0.5rem",
      display: "inline-block",
      textTransform: "capitalize",
    },
  };

  if (loading) {
    return (
      <section style={styles.section} id="articles">
        <div style={styles.loading}>Loading articles...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section style={styles.section} className="page-section" id="articles">
        <div style={styles.loading}>{error}</div>
        <a href="https://pengguanya.github.io/" target="_blank" rel="noopener noreferrer" style={{ marginTop: "1rem", color: "var(--text-primary)" }}>
          Visit Blog Directly
        </a>
      </section>
    );
  }

  return (
    <section style={styles.section} className="articles-section page-section" id="articles">
      <div className="page-header articles-header">
        <h1>Latest Articles</h1>
        <p>Thoughts on Data Science, Statistics, and Development</p>
      </div>

      {Object.keys(categorizedArticles).sort().map((category) => (
        <div key={category} style={styles.categorySection}>
          <h2 style={styles.categoryTitle}>{formatCategoryName(category)}</h2>
          <div style={styles.grid}>
            {categorizedArticles[category].slice(0, 3).map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.card}
                className="article-card"
              >
                <div style={styles.cardContent}>
                  <h2 style={styles.cardTitle}>{article.title}</h2>
                  <div style={styles.cardDate}>
                    {new Date(article.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <p style={styles.cardExcerpt}>
                    {article.description
                      ? article.description.replace(/<[^>]*>?/gm, "").substring(0, 150) + "..."
                      : "Click to read more..."}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Articles;
