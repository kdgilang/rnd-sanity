import { ImEmbed } from 'react-icons/im'
import { Rule } from 'sanity'
import nameField from '../fields/name'

export const embedComponent = {
  icon: ImEmbed,
  name: 'embedComponent',
  type: 'document',
  title: 'Embed',
  fields: [
    nameField({
      mandatory: true
    }),
    {
      name: 'code',
      type: 'text',
      title: 'Embed Code',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
