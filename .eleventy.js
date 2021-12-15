const pluginSass = require("eleventy-plugin-sass");
var slugify = require('slugify');
/*
const optionsProd = {};
const optionsDev = {
  "sourcemaps": true
};
const options = process.env.ELEVENTY_ENV === "production" ? optionsProd : optionsDev;
*/
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass);

  const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
  });

  eleventyConfig.addFilter('markdownInline', function (markdownString) {
    if (!markdownString) {
      return markdownString;
    }
    return md.renderInline(markdownString);
  });

  // Custom collection: Tout le glossaire du RGAA
  eleventyConfig.addCollection('glossary', function (collection) {
    const glossaryItem = collection.getFilteredByGlob(
      './src/rgaa/glossaire/*.md'
    );
    const glossary = glossaryItem.map(function (term) {
      const anchor = term.fileSlug; // ex: 2.1
      return {
        term,
        anchor,
      };
    })
    .sort((a, b) => a.anchor.localeCompare(b.anchor));
    return glossary;
  });

  // Custom collection: Tout les critères, tests et références du RGAA
  eleventyConfig.addCollection('criteriaAndTests', function (collection) {
    const criteria = collection.getFilteredByGlob(
      './src/rgaa/criteres/*/index.md'
    );
    const all = criteria.map(function (criterion) {
      const critNum = criterion.fileSlug; // ex: 2.1
      const themeNum = critNum.substr(0, critNum.indexOf('.'));
      const testsRaw = collection
        .getFilteredByGlob('./src/rgaa/criteres/' + critNum + '/tests/*.md')
        .sort((a, b) => Number(a.fileSlug) - Number(b.fileSlug));
      const annexeCrit = collection.getFilteredByGlob('./src/rgaa/criteres/' + critNum + '/annexe.md')[0];
      const tests = testsRaw.map(function (test) {
        const slug = test.fileSlug;
        const testSlug = critNum + '.' + slug;
        return {
          testSlug,
          test,
        };
      });
      return {
        themeNum,
        critNum,
        criterion,
        tests,
        annexeCrit,
      };
    })
    .sort((a, b) => Number(a.critNum) - Number(b.critNum));
    //console.log('*****');
    //console.dir(all, { depth: 1 });
    return all;
  });
  eleventyConfig.addLiquidShortcode("def", function(terme) { 
    const ancre = terme.slugify(); 
    return "<a class=\"glossaire\" href=\"/glossaire/#" + ancre + "\">" + terme + "</a>"; 
  });
  eleventyConfig.addLiquidShortcode("crit", function(numero) { 
    return "<a class=\"critere\" href=\"/criteres-et-tests/#" + numero + "\">critère " + numero + "</a>"; 
  });
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/favicon');
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
