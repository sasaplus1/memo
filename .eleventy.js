const util = require('util');

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  // ref: https://github.com/11ty/eleventy/issues/1526#issuecomment-731855231
  eleventyConfig.addFilter('inspect', function (content) {
    return util.inspect(content, false, null, false);
  });

  return {
    dir: {
      input: 'src',
      output: 'public'
    },
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk'
  };
};
