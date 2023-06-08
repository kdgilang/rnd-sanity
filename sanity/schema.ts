import { type SchemaTypeDefinition } from 'sanity'
import articelContent from './schemas/contents/article'
import flexibleContent from './schemas/contents/flexible'
import siteSetting from './schemas/settings/site'
import socialMediaSetting from './schemas/settings/socialMedia'
import sectionField from './schemas/shared/section'
import accordionComponent, { accordionItem } from './schemas/components/accordion'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    accordionItem,
    accordionComponent,
    sectionField,
    articelContent,
    flexibleContent,
    siteSetting,
    socialMediaSetting
  ],
}
