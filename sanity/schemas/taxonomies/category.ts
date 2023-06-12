import { ImPriceTags } from 'react-icons/im'
import { Rule } from 'sanity'
import titleField from '../fields/title'
import slugField from '../fields/slug'
import descriptionField from '../fields/description'
import iconField from '../fields/icon'
import menuNameField from '../fields/menuName'

export const categoryTaxonomy = {
  icon: ImPriceTags,
  name: 'categoryTaxonomy',
  type: 'document',
  title: 'Category',
  fields: [
    iconField({
      mandatory: true
    }),
    titleField(),
    menuNameField(),
    slugField(),
    descriptionField(),
  ]
}