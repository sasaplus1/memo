module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
  };
};
