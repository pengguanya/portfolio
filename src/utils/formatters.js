/**
 * Formats a category name into a title-like string.
 * Handles:
 * - Hyphens and underscores (replaced with spaces)
 * - CamelCase (inserts space before capital letters)
 * - Capitalization (capitalizes the first letter of each word)
 * 
 * @param {string} name - The raw category name (e.g. "DataScience", "data-science")
 * @returns {string} - The formatted name (e.g. "Data Science")
 */
export const formatCategoryName = (name) => {
  if (!name) return "";
  // Replace hyphens and underscores with spaces
  let formatted = name.replace(/[-_]/g, " ");
  // Insert space before capital letters in CamelCase
  formatted = formatted.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Capitalize the first letter of each word
  return formatted.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};
