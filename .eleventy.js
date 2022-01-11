const { styles } = require('eleventy-plugin-styles');
const pluginNavigation = require("@11ty/eleventy-navigation");

  /**
 * Get the criteria number to be compared for sorting purpose
 *
 * It pads the decimal part of the slug with zeros
 * so "4.1" makes 4.001 and "4.10" makes 4.010
 *
 * @param {String} critNumTxt The criteria number as a string (e.g. "4.12")
 * @returns {Number} the useful number for sorting purpose (e.g. 4.012)
 */
function getCriteriaNumToCompare(critNumTxt) {
  const decPos = critNumTxt.lastIndexOf('.');
  const aInt = critNumTxt.substring(0, decPos);
  const aDec = critNumTxt.substring(decPos + 1);
  return Number(aInt + '.' + aDec.padStart(3, '0'));
}

const isProd = process.env.ELEVENTY_ENV === 'production';

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(styles, {
    inputDirectory: 'src/scss',
    purgeCSSOptions: 'off',
    cssnanoOptions: 'off',
  });

  const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
  });
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const slugify = require("slugify");
 
  eleventyConfig.addFilter('markdownInline', function (markdownString) {
    if (!markdownString) {
      return markdownString;
    }
    return md.renderInline(markdownString);
  });

 
  const markdownItAnchorOptions = {
    level: [2, 3],
    slugify: (str) =>
      slugify(str, {
        lower: true,
        strict: true,
        remove: /["]/g,
      }),
    tabIndex: false
  };
  
  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
  }).use(markdownItAnchor, markdownItAnchorOptions);
  
  // This is the part that tells 11ty to swap to our custom config
  eleventyConfig.setLibrary("md", markdownLibrary);



  // Custom collection: Tout le glossaire du RGAA
  eleventyConfig.addCollection('glossary', function (collection) {
    const glossaryItem = collection.getFilteredByGlob(
      './src/rgaa/glossaire/*.md'
    );
    const glossary = glossaryItem
      .map(function (term) {
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
    const all = criteria
      .map(function (criterion) {
        const critNum = criterion.fileSlug; // ex: 2.1
        const themeNum = critNum.substr(0, critNum.indexOf('.'));
        const testsRaw = collection
          .getFilteredByGlob('./src/rgaa/criteres/' + critNum + '/tests/*.md')
          .sort((a, b) => Number(a.fileSlug) - Number(b.fileSlug));
        const annexeCrit = collection.getFilteredByGlob(
          './src/rgaa/criteres/' + critNum + '/annexe.md'
        )[0];
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
      .sort(function (a, b) {
        const aComp = getCriteriaNumToCompare(a.critNum);
        const bComp = getCriteriaNumToCompare(b.critNum);
        return Number(aComp) - Number(bComp);
      });
    //console.log('*****');
    //console.dir(all, { depth: 1 });
    return all;
  });

  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addLiquidShortcode('crit', function (numero) {
    return ('<a class="critere" href="/criteres-et-tests/#'+numero+'">critère '+numero+'</a>');
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
