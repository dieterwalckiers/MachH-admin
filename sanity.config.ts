import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { createIcon } from "./utils"


export default defineConfig({
  name: 'default',
  title: 'MachH',

  projectId: 'x6sfouap',
  dataset: 'production',

  plugins: [deskTool({
    structure: (S, context) => {
      return S.list()
        .title('Mach-H Content')
        .items([
          orderableDocumentListDeskItem({
            type: 'project',
            title: 'Projects',
            icon: createIcon("📁"),
            // Required if using multiple lists of the same 'type'
            // id: 'orderable-en-projects',
            // See notes on adding a `filter` below
            // filter: `__i18n_lang == $lang`,
            // params: {
            //   lang: 'en_US',
            // },
            // pass from the structure callback params above
            S,
            context,
          }),
          S.listItem()
            .title("Events")
            .icon(createIcon("📅"))
            .child(
              S.documentTypeList("event")
            ),
          orderableDocumentListDeskItem({
            type: 'post',
            title: 'News',
            icon: createIcon("📰"),
            S,
            context
          }),
          S.listItem()
            .title("Site Settings")
            .icon(createIcon("⚙️"))
            .child(
              S.documentTypeList("siteSettings")
            ),
        ])
    },

  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
