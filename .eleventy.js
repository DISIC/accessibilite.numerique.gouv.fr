module.exports = function (eleventyConfig) {
  /*
   * Markdown-It 'markdownify' filter
   * source: https://github.com/BradCoffield/kidlitconnection/commit/e42a6dee1021be4b1869e4b62582230aed5db84e)
   */
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

  // Custom collection: criteriaAndTests
  eleventyConfig.addCollection('criteriaAndTests', function (collection) {
    const criteria = collection.getFilteredByGlob(
      './src/rgaa/criteres/*/index.md'
    );

    /* Build an array of criterion objects with */
    /* their corresponding tests and extra info */
    const all = criteria.map(function (criterion) {
      const critNum = criterion.fileSlug; // ex: 2.1
      const themeNum = critNum.substr(0, critNum.indexOf('.'));

      const testsRaw = collection
        .getFilteredByGlob('./src/rgaa/criteres/' + critNum + '/tests/*.md')
        .sort((a, b) => parseInt(a.fileSlug) - parseInt(b.fileSlug));

      const annexeCrit = collection.getFilteredByGlob('./src/rgaa/criteres/' + critNum + '/annexe.md')[0];
    
      /* Build an array of test objects with extra info */
      const tests = testsRaw.map(function (test) {
        const slug = test.fileSlug;
        const testNum = slug.substr(0, slug.indexOf('.'));
        const testFullNum = critNum + '.' + testNum;
        const testSlug = critNum + '.' + slug;

        return {
          testNum,
          testFullNum,
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
    .sort((a, b) => parseInt(a.themeNum) - parseInt(b.themeNum));

    console.log('*****');
    console.dir(all, { depth: 4 });

    return all;
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