import { ImEmbed } from 'react-icons/im'
import { Rule } from 'sanity'

export const embedComponent = {
  icon: ImEmbed,
  name: 'embedComponent',
  type: 'document',
  title: 'Embed',
  fields: [
    {
      name: 'code',
      type: 'text',
      title: 'Embed Code',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
