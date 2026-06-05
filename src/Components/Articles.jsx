import React, { useState, useEffect } from "react";
import { decodeHtmlEntities } from "../utils/formatters";

const Articles = ({ theme }) => {
  const [categorizedArticles, setCategorizedArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isLight = theme === "light";

  const categoryOrder = ["AI & ML", "Quantitative Research", "DevOps & Computing", "Drug Development"];

  useEffect(() => {
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
          const rawTitle = entry.querySelector("title")?.textContent || "";
          const title = decodeHtmlEntities(rawTitle);
          const link = entry.querySelector("link[rel='alternate']")?.getAttribute("href") || "";
          const pubDate = entry.querySelector("published")?.textContent || "";
          const rawDescription = entry.querySelector("summary")?.textContent || entry.querySelector("content")?.textContent || "";
          const description = decodeHtmlEntities(rawDescription);

          const categories = Array.from(entry.querySelectorAll("category")).map(cat => cat.getAttribute("term"));

          return { title, link, pubDate, description, categories };
        });

        const groups = {};
        items.forEach((item) => {
          const mainCategory = (item.categories && item.categories[0]) || "General";

          if (!groups[mainCategory]) {
            groups[mainCategory] = [];
          }
          groups[mainCategory].push(item);
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

  if (loading) {
    return (
      <section className="articles-section page-section" id="articles">
        <div className="articles-loading">Loading articles...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="articles-section page-section" id="articles">
        <div className="articles-loading">{error}</div>
        <a href="https://pengguanya.github.io/" target="_blank" rel="noopener noreferrer" className="articles-error-link">
          Visit Blog Directly
        </a>
      </section>
    );
  }

  return (
    <section className="articles-section page-section" id="articles">
      <div className="page-header articles-header">
        <h1>Latest Articles</h1>
        <p>Thoughts on Data Science, Statistics, and Development</p>
      </div>

      {categoryOrder
        .filter((category) => categorizedArticles[category]?.length > 0)
        .concat(Object.keys(categorizedArticles).filter((c) => !categoryOrder.includes(c)))
        .map((category) => (
        <div key={category} className="articles-category">
          <h2 className="articles-category__title">{category}</h2>
          <div className="articles-grid">
            {categorizedArticles[category].slice(0, 3).map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
              >
                <div className="article-card__content">
                  <h2 className="article-card__title">{article.title}</h2>
                  <div className="article-card__date">
                    {new Date(article.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <p className="article-card__excerpt">
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
