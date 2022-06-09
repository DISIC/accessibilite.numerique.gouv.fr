const fs = require('fs').promises;
const fm = require('front-matter')

const themes = require('../src/_data/themes.json')

/*
  TODO:
    - parse particularCases
    - parse technicalNotes
    - add npm command
*/

const CRITERIA_SOURCE = './src/rgaa/criteres'
const CRITERIA_DESTINATION = './RGAA/4.1/criteres.json'

/**
 * Get criterion title
 * @param {string} path
 * @returns {string} title attribute
 */
 async function parseTitle(path) {
  const data = await fs.readFile(path, "utf-8");
  const result = await fm(data)

  return result.attributes.title
}

/**
 * Parse criterion WCAG and techniques references.
 * @param {string} path
 * @returns {object}
 */
 async function parseReferences(path) {
  const data = await fs.readFile(path, "utf-8");
  const result = await fm(data)

  const wcag = result.attributes.WCAG.map(w => {
    return `${w.successCriterion} ${w.title} (${w.level})`
  })

  return {
    wcag,
    techniques: result.attributes.Techniques
  }
}

/**
 * Return criterion tests with or without steps
 * @param {string} folderPath
 * @returns {array|string}
 */
 async function parseTests(folderPath) {
  const tests = {}

  const folders = await fs.readdir(folderPath);
  folders.forEach(async (_, i) => {
    const data = await fs.readFile(`${folderPath}/${i + 1}.md`, "utf-8");
    const result = fm(data)

    tests[i + 1] = result.attributes.steps
      ? [result.attributes.title, ...result.attributes.steps]
      : result.attributes.title
  })

  return tests
}

/**
 * Generate a JSON file containing all the criteria
 * from `src/rgaa/criteres` grouped by topics.
 */
async function generateCriteria() {
  try {
    // Init JSON data
    let jsonData = { wcag: { version: 2.1 }, topics: [] }
    const criteria = []

    const folders = await fs.readdir(CRITERIA_SOURCE);
    for (const folder of folders) {
      // Build all criterion properties
      const criterionObject = {
        criterium: {
          number: folder,
          title: await parseTitle(`${CRITERIA_SOURCE}/${folder}/index.md`),
          tests: await parseTests(`${CRITERIA_SOURCE}/${folder}/tests`)
        },
        references: await parseReferences(`${CRITERIA_SOURCE}/${folder}/annexe.md`)
      }

      // Push to JSON data
      criteria.push(criterionObject)
    }

    // Organize criteria by topic
    const topics = Object.entries(themes).map(t => {
      const topicNumber = t[0]
      return {
        topic: t[1].title,
        number: topicNumber,
        criteria: criteria.filter(c => {
          return c.criterium.number.split('.')[0] === topicNumber
        })
      }
    })

    jsonData.topics = topics

    // Create JSON file
    let data = JSON.stringify(jsonData, null, 2)
    fs.writeFile(CRITERIA_DESTINATION, data);

    console.log(`✅ Criteria list successfully generated.`);
  } catch(error) {
    console.error(`❌ An error occured while generating criteria list: ${error}`);
  }
}

generateCriteria()