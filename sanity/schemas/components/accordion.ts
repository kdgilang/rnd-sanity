const accordionComponent = {
  name: 'accordionComponent',
  type: 'array',
  title: 'Section',
  of: [{ type: 'accordionItem' }]
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

export default accordionComponent