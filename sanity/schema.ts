import { type SchemaTypeDefinition } from 'sanity'
import articleContent from './schemas/contents/article'
import flexibleContent from './schemas/contents/flexible'
import siteSetting from './schemas/settings/site'
import networkSetting from './schemas/settings/network'
import sectionField from './schemas/shared/section'
import { accordionComponent, accordionItem } from './schemas/components/accordion'
import { carouselComponent,  carouselItem } from './schemas/components/carousel'
import { embedComponent } from './schemas/components/embed'
import { cardComponent } from './schemas/components/card'
import { bannerComponent } from './schemas/components/banner'
import { teamComponent } from './schemas/components/team'
import { mediaTileComponent } from './schemas/components/mediaTile'
import { categoryTaxonomy } from './schemas/taxonomies/category'
import routeSetting from './schemas/settings/route'
import linkField from './schemas/fields/link'
import { richTextComponent } from './schemas/components/richText'
import { collectionComponent } from './schemas/components/collection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...linkField(),
    articleContent,
    flexibleContent,
    categoryTaxonomy,
    siteSetting,
    networkSetting,
    routeSetting,
    embedComponent,
    carouselItem,
    carouselComponent,
    accordionItem,
    accordionComponent,
    sectionField,
    cardComponent,
    bannerComponent,
    teamComponent,
    mediaTileComponent,
    richTextComponent,
    collectionComponent,
  ],
}
