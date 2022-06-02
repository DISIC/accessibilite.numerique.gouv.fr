const fs = require('fs').promises;
const markdownIt = require('markdown-it')
const md = new markdownIt()
const fm = require('front-matter')

const GLOSSARY_SOURCE = './src/rgaa/glossaire'
const GLOSSARY_DESTINATION = './scripts/glossaire.json'

/**
 * @param {string} filename
 * @returns {object} Frontmatter attributes and main content
 */
async function parseMarkdownFile(filename) {
  const data = await fs.readFile(`${GLOSSARY_SOURCE}/${filename}`, "utf-8");
  const result = fm(data)

  return {
    title: result.attributes.title,
    content: md.render(result.body)
  }
}
/**
 * Generate a JSON file containing all the glossary entries
 * from `src/rgaa/glossaire` with 2 `title` and `content`
 */
async function generateGlossary() {
  try {
    // Init JSON data
    let jsonData = { glossary: [] }

    // Loop over files
    const files = await fs.readdir(GLOSSARY_SOURCE);
    for (const file of files) {
      const { title, content } = await parseMarkdownFile(file)
      let cleanedContent = null

      // Handle shortcodes
      const critRegex = /\{% crit (?<id>\d{1,2}.\d{1,2}) %\}/g // {% crit 12.10 %}
      const testRegex = /\{% test '(?<id>\d{1,2}.\d{1,2}.\d{1,2})' %\}/g // {% test 2.10.3 %}
      const baseUrl = "https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/"

      cleanedContent = content
        .replace(critRegex, `<a ${baseUrl}#$<id>">critère $<id></a>`)
        .replace(testRegex, `<a ${baseUrl}#$<id>">test $<id></a>`)

      // Push to JSON data
      jsonData.glossary.push({ title, body: cleanedContent })
    }

    // Create JSON file
    let data = JSON.stringify(jsonData, null, 2);
    fs.writeFile(GLOSSARY_DESTINATION, data);

    // TODO: Escape HTML tags?
    console.log(`✅ Glossary successfully generated.`);

  } catch (err) {
    console.error(`❌ An error occured while generating glossary: ${err}`);
  }
}

generateGlossary()