const { styles } = require("eleventy-plugin-styles");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginTOC = require("eleventy-plugin-toc");
const esbuild = require("esbuild");
const babel = require("esbuild-plugin-babel");
const fs = require("fs");
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
	const decPos = critNumTxt.lastIndexOf(".");
	const aInt = critNumTxt.substring(0, decPos);
	const aDec = critNumTxt.substring(decPos + 1);
	return Number(aInt + "." + aDec.padStart(3, "0"));
}

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = function (eleventyConfig) {
	eleventyConfig.on("eleventy.after", () => {
		// Options for all scripts
		const options = {
			minify: isProd,
			sourcemap: !isProd,
			bundle: true,
		};

		// Options for main.js
		const mainOptions = {
			...options,
			entryPoints: ["src/js/main.js"],
		};

		// Options for the "nomodule version" of main.js
		const noModuleOptions = {
			plugins: [babel()],
			target: ["es5"],
		};

		const mainPromiseNoModule = esbuild.build({
			...mainOptions,
			...noModuleOptions,
			outfile: "public/js/main.nomodule.js",
		});

		const mainPromiseModule = esbuild.build({
			...mainOptions,
			outfile: "public/js/main.module.js",
		});

		/**
		 * @todo Tree shake DSFR components
		 * --> needs to import separate modules instead of
		 */

		// DSFR
		// const dsfrOptions = {
		// 	...options,
		// 	treeShaking: true,
		// };

		// const dsfrPromiseNoModule = esbuild.build({
		// 	...dsfrOptions,
		// 	...noModuleOptions,
		// 	entryPoints: ["src/js/dsfr.*.js"],
		// 	outfile: "public/js/dsfr.nomodule.min.js",
		// });

		// const dsfrPromiseModule = esbuild.build({
		// 	...mainOptions,
		// 	outfile: "public/js/main.module.js",
		// });

		// return mainPromiseNoModule
		// 	.then(mainPromiseModule)
		// 	.then(dsfrPromiseNoModule)
		// 	.then(dsfrPromiseModule);

		return mainPromiseNoModule.then(mainPromiseModule);
	});
	eleventyConfig.addWatchTarget("./src/js/");


	  // Browsersync Overrides
		eleventyConfig.setBrowserSyncConfig({
			callbacks: {
				ready: function(err, browserSync) {
					const content_404 = fs.readFileSync('public/404/index.html');

					browserSync.addMiddleware("*", (req, res) => {
						// Provides the 404 content without redirect.
						res.write(content_404);
						res.end();
					});
				},
			},
			ui: false,
			ghostMode: false
		});

	eleventyConfig.addPlugin(pluginTOC, {
		tags: ["h2"],
		wrapper: "nav",
		wrapperClass: "fr-summary  fr-mb-4w",
		wrapperLabel: "Sommaire",
	});
	eleventyConfig.addPlugin(styles, {
		inputDirectory: "src/scss",
		publicDirectory: "css",
		purgeCSSOptions: "off",
		cssnanoOptions: "off",
	});

	const md = require("markdown-it")({
		html: true,
		linkify: true,
		typographer: true,
	});
	const markdownIt = require("markdown-it");
	const markdownItAnchor = require("markdown-it-anchor");
	const slugify = require("slugify");

	eleventyConfig.addFilter("markdownInline", function (markdownString) {
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
		tabIndex: false,
	};

	/* Markdown Overrides */
	let markdownLibrary = markdownIt({
		html: true,
	}).use(markdownItAnchor, markdownItAnchorOptions);

	// This is the part that tells 11ty to swap to our custom config
	eleventyConfig.setLibrary("md", markdownLibrary);

	// Custom collection: La méthode technique
	eleventyConfig.addCollection("methodeTechnique", function (collection) {
		let methodeTechnique = collection.getFilteredByGlob("./src/methode/*.md");
		methodeTechnique = methodeTechnique.map(function (methode) {
			const slug = methode.fileSlug;
			return {
				methode,
				slug,
			};
		});
		return methodeTechnique.sort(
			(a, b) =>
				a.methode.data.eleventyNavigation.order -
				b.methode.data.eleventyNavigation.order
		);
	});

	// Custom collection: Les obligations légales
	eleventyConfig.addCollection("obligations", function (collection) {
		let obligations = collection.getFilteredByGlob("./src/obligations/*.md");
		obligations = obligations.map(function (obligation) {
			const slug = obligation.fileSlug;
			return {
				obligation,
				slug,
			};
		});
		return obligations.sort(
			(a, b) =>
				a.obligation.data.eleventyNavigation.order -
				b.obligation.data.eleventyNavigation.order
		);
	});

	// Custom collection: Les ressources
	eleventyConfig.addCollection("ressources", function (collection) {
		let ressources = collection.getFilteredByGlob("./src/ressources/*.md");
		ressources = ressources.map(function (ressource) {
			const slug = ressource.fileSlug;
			return {
				ressource,
				slug,
			};
		});
		return ressources.sort(
			(a, b) =>
				a.ressource.data.eleventyNavigation.order -
				b.ressource.data.eleventyNavigation.order
		);
	});

	// Custom collection: La faq
	eleventyConfig.addCollection("faq", function (collection) {
		const question = collection.getFilteredByGlob("./src/rgaa/faq/*.md");
		const faq = question.map(function (question) {
			return {
				question,
			};
		});
		return faq;
	});

	// Custom collection: Tout le glossaire du RGAA
	eleventyConfig.addCollection("glossary", function (collection) {
		const glossaryItem = collection.getFilteredByGlob(
			"./src/rgaa/glossaire/*.md"
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
	eleventyConfig.addCollection("criteriaAndTests", function (collection) {
		const criteria = collection.getFilteredByGlob(
			"./src/rgaa/criteres/*/index.md"
		);
		const all = criteria
			.map(function (criterion) {
				const critNum = criterion.fileSlug; // ex: 2.1
				const themeNum = critNum.substr(0, critNum.indexOf("."));
				const testsRaw = collection
					.getFilteredByGlob("./src/rgaa/criteres/" + critNum + "/tests/*.md")
					.sort((a, b) => Number(a.fileSlug) - Number(b.fileSlug));
				const annexeCrit = collection.getFilteredByGlob(
					"./src/rgaa/criteres/" + critNum + "/annexe.md"
				)[0];
				const tests = testsRaw.map(function (test) {
					const slug = test.fileSlug;
					const testSlug = critNum + "." + slug;
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
	eleventyConfig.addLiquidShortcode("crit", function (numCrit) {
		return (
			'<a class="critere" href="/methode/criteres-et-tests/#' +
			numCrit +
			'">critère ' +
			numCrit +
			"</a>"
		);
	});

	eleventyConfig.addLiquidShortcode("test", function (numTest) {
		return (
			'<a class="critere" href="/methode/criteres-et-tests/#' +
			numTest +
			'">test ' +
			numTest +
			"</a>"
		);
	});

	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/fonts");
	/** @todo : remove dsfr passthrough when bundle with esbuild **/
	eleventyConfig.addPassthroughCopy("./src/js/dsfr*");
	eleventyConfig.addPassthroughCopy("./src/favicon");
	eleventyConfig.addPassthroughCopy("./src/icons");
	eleventyConfig.addPassthroughCopy("./src/doc");

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
