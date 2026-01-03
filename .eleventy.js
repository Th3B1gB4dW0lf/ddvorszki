module.exports = function(eleventyConfig) {
  // Pass through CSS files
  eleventyConfig.addPassthroughCopy("src/css");

  // Pass through any images or assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  // Add date filter for formatting
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toLocaleDateString("hu-HU", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  return {
    // GitHub Pages pathPrefix for project sites
    pathPrefix: "/ddvorszki/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
