/**
 * Helper function to resolve image imports that might be ES modules (Parcel 2 behavior)
 * or direct URL strings (Parcel 1 / CommonJS behavior).
 * 
 * @param {string|object} imageImport - The imported image object or string
 * @returns {string} The resolved image URL
 */
export const resolveImage = (imageImport) => {
  if (!imageImport) return "";
  if (typeof imageImport === "string") return imageImport;
  if (typeof imageImport === "object" && imageImport.default) {
    return imageImport.default;
  }
  return imageImport;
};

