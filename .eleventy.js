module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("criteresRgaa", function(collection) {
        return collection.getFilteredByGlob("./src/rgaa/*/*/index.md");
    });




    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");    
    eleventyConfig.addPassthroughCopy("./src/fonts");    
    eleventyConfig.addPassthroughCopy("./src/favicon");    
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
};
