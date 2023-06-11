import { ImMenu } from 'react-icons/im'
import { Rule } from 'sanity'

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
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      title: 'Title',
      type: 'array',
      of: [{type: 'block'}]
    },
  ]
}