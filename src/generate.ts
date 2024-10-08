import fsp from 'node:fs/promises'
import path from 'node:path'
import { glob } from 'tinyglobby'

async function run() {
  const entry = await glob('./src/generated/*.json', {
    absolute: true,
  })
  entry.map(async (url) => {
    const json = (await import(url)).default
    const basename = path.basename(url)
    for (const key in json) {
      if (key.startsWith('Use'))
        continue
      const value = json[key]
      for (const k in value) {
        const r = value[k]
        r.default = r.defaultValue || ''
        r.description_zh = r.description
      }

      const result = {
        name: key,
        props: value,
        events: [],
        slots: [],
        typeDetail: {},
        suggestions: [],
        methods: [],
        link: `https://v2.chakra-ui.com/docs/components/${basename}`,
        link_zh: `https://v2.chakra-ui.com/docs/components/${basename}`,
      }
      fsp.writeFile(`./src/chakraUiReact2/${key}.json`, JSON.stringify(result, null, 2))
    }
  })
}
run()
