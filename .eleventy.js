module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/img");
    // Return your Object options:
    return {
      dir: {
        input: "content"
      },
      markdownTemplateEngine: "mustache"
    }
  };
