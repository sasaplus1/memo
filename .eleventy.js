module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  eleventyConfig.setBrowserSyncConfig({
    port: 4000,
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
