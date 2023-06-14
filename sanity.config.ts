/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { CustomLogo } from '@sanity/plugins/customization/Logo'
import { navStructure } from '@sanity/navStructure'
import { logoPlugin } from '@sanity/plugins/customization/Logo'
import {defaultDocumentNode} from '@sanity/defaultDocumentNode'
import {colorInput} from '@sanity/color-input'
import { iconPicker } from 'sanity-plugin-icon-picker'
import {codeInput} from '@sanity/code-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '@sanity/env'
import {schema} from '@sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      logo: CustomLogo,
    },
  },
  plugins: [
    deskTool({
      structure: navStructure,
      defaultDocumentNode
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    logoPlugin(),
    colorInput(),
    iconPicker(),
    codeInput(),
  ],
})


