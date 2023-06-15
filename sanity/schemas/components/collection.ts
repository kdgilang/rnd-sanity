import { ImStack } from 'react-icons/im'
import { Rule } from 'sanity'
import nameField from '../fields/name'
import { contentTypes } from '../variables/type'

export const collectionComponent = {
  icon: ImStack,
  name: 'collectionComponent',
  type: 'document',
  title: 'Collection',
  fields: [
    nameField({
      mandatory: true
    }),
    {
      name: 'type',
      type: 'string',
      title: 'Content Type',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: contentTypes.map(({ title, value }) => ({ title, value })),
        layout: 'select',
      },
    },
    {
      name: 'limit',
      type: 'number',
      title: 'Limit',
      validation: (Rule: Rule) => Rule.required(),
    },
  ]
}
