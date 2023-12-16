const nunjucksDate = require("nunjucks-date");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("_data");
    eleventyConfig.addNunjucksFilter('date', nunjucksDate);
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };
  