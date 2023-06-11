import { ImNewspaper } from 'react-icons/im'
import { Rule } from 'sanity'
import {columns} from '../variables/columns'

export const cardComponent = {
  icon: ImNewspaper,
  name: 'cardComponent',
  type: 'document',
  title: 'Card Carousel',
  fields: [
    {
      name: 'cards',
      type: 'array',
      title: 'Card Items',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [{ type: 'articleContent' }]
        }
      ]
    }
  ]
}
