import { ImPriceTags } from 'react-icons/im'
import { Rule } from 'sanity'
import titleField from '../fields/title'
import slugField from '../fields/slug'
import descriptionField from '../fields/description'
import iconField from '../fields/icon'

export const categoryTaxonomy = {
  icon: ImPriceTags,
  name: 'categoryTaxonomy',
  type: 'document',
  title: 'Category',
  fields: [
    iconField(),
    titleField(),
    slugField(),
    descriptionField(),
  ]
}