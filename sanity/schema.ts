import { type SchemaTypeDefinition } from 'sanity'
import { articlePage } from './schemas/pages/article'
import flexiblePage from './schemas/pages/flexible'
import siteSetting from './schemas/settings/site'
import socialMediaSetting from './schemas/settings/socialMedia'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    articlePage,
    flexiblePage,
    siteSetting,
    socialMediaSetting
  ],
}
