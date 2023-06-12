import { ImNewspaper } from 'react-icons/im'
import { Rule } from 'sanity'
import { cardViews } from '../variables/views'

export const cardComponent = {
  icon: ImNewspaper,
  name: 'cardComponent',
  type: 'document',
  title: 'Card',
  fields: [
    {
      name: 'view',
      type: 'string',
      title: 'View',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: cardViews.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Card Items',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [
            { type: 'articleContent' },
            { type: 'teamComponent' },
            { type: 'categoryTaxonomy' },
          ]
        }
      ]
    }
  ]
}
