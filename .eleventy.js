const util = require('util');

const markdownIt = require('markdown-it');

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const mi = markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  eleventyConfig.addWatchTarget('src/index.css');
  // wait for esbuild
  eleventyConfig.setWatchThrottleWaitTime(100);

  // add class to inline code block
  const originalCodeInline =
    mi.renderer.rules.code_inline ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
  mi.renderer.rules.code_inline = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(['class', 'language-']);

    return originalCodeInline(tokens, idx, options, env, self);
  };
  eleventyConfig.setLibrary('md', mi);

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
