module.exports = function (eleventyConfig) {
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