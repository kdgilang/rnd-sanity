import { ImNewspaper } from 'react-icons/im'
import { Rule } from 'sanity'
import columns from '../variables/columns'

export const cardComponent = {
  icon: ImNewspaper,
  name: 'cardComponent',
  type: 'document',
  title: 'Card',
  fields: [
    {
      name: 'column',
      type: 'string',
      title: 'Column',
      options: {
        list: columns.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
      validation: (Rule: Rule) => Rule.required()
    },
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
