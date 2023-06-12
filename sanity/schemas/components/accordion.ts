import { ImMenu } from 'react-icons/im'
import { Rule } from 'sanity'
import bodyField from '../fields/bodyField'
import titleField from '../fields/title'

export const accordionComponent = {
  icon: ImMenu,
  name: 'accordionComponent',
  type: 'document',
  title: 'Accordion',
  fields: [
    {
      name: 'accordionItems',
      type: 'array',
      title: 'Accordion Items',
      of: [{ type: 'accordionItem' }],
      validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'accordionItems.0.title',
      subtitle: '_type'
    },
    prepare(selection: any) {
      const {title, subtitle} = selection

      return {
        title: `${title} - ${subtitle?.replace('Component', '')}`
      }
    }
  }
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