module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    port: 4000,
  });

  return {
    dir: {
      input: "src",
    },
  };
};
