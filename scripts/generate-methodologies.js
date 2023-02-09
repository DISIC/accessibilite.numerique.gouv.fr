const path = require("path");
const fs = require("fs").promises;

/**
 * Generate a JSON file containing every tests methodology in the form of an
 * object with test IDs ("1.2.3") as keys and the methodology markdown for values.
 *
 * ```
 * {
 *   "1.2.3": "1. Retrouver dans le document les images décoratives structurées..."
 * }
 * ```
 */
async function generateMethodologies() {
	const METHODOLOGY_SOURCE = path.join(__dirname, "..", "./src/rgaa/criteres");
	const METHODOLOGY_DESTINATION = path.join(
		__dirname,
		"..",
		"./RGAA/methodologies.json"
	);

	const testsData = [];

	const criteriumFolders = await fs.readdir(METHODOLOGY_SOURCE);

	for (const criteriumFolder of criteriumFolders) {
		const testFiles = await fs.readdir(
			path.join(METHODOLOGY_SOURCE, criteriumFolder, "/tests")
		);

		for (const testFile of testFiles) {
			const data = await fs.readFile(
				path.join(METHODOLOGY_SOURCE, criteriumFolder, "/tests", testFile),
				"utf-8"
			);
			const markdown = data.split("---")[2].trimStart();

			const key = `${criteriumFolder}.${testFile.split(".")[0]}`;

			testsData.push({ key, markdown });
		}
	}

	testsData.sort((a, b) => {
		const [topicA, criteriumA, testA] = a.key.split(".").map(Number);
		const [topicB, criteriumB, testB] = b.key.split(".").map(Number);

		if (topicA !== topicB) {
			return topicA - topicB;
		}

		if (criteriumA !== criteriumB) {
			return criteriumA - criteriumB;
		}

		if (testA !== testB) {
			return testA - testB;
		}

		return 0;
	});

	const jsonData = testsData.reduce((acc, value) => {
		acc[value.key] = value.markdown;
		return acc;
	}, {});

	await fs.writeFile(
		METHODOLOGY_DESTINATION,
		JSON.stringify(jsonData, null, 2)
	);
}

generateMethodologies()
	.then(() => {
		console.log(`✅ Methodologies successfully generated.`);
	})
	.catch((err) => {
		console.error(`❌ An error occured while generating methodologies: ${err}`);
	});
