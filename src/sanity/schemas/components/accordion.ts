import { ImMenu } from 'react-icons/im'
import { Rule } from 'sanity'
import bodyField from '../fields/body'
import titleField from '../fields/title'
import nameField from '../fields/name'

export const accordionComponent = {
  icon: ImMenu,
  name: 'accordionComponent',
  type: 'document',
  title: 'Accordion',
  fields: [
    nameField({
      mandatory: true
    }),
    {
      name: 'accordionItems',
      type: 'array',
      title: 'Accordion Items',
      of: [{ type: 'accordionItem' }],
      validation: (Rule: Rule) => Rule.required()
    }
  ],
}

export const accordionItem = {
  name: 'accordionItem',
  type: 'object',
  title: 'Item',
  fields: [
    titleField({
      mandatory: true
    }),
    bodyField({
      mandatory: true
    })
  ]
}