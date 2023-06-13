import { Rule } from "sanity"

const routeSetting = {
  name: 'routeSetting',
  type: 'object',
  title: 'Route',
  fields: [
    {
      name: 'homePage',
      type: 'reference',
      title: 'Home Page',
      options: {
        disableNew: true,
      },
      to: [
        { type: 'flexibleContent' }
      ]
    },
    {
      name: 'menu',
      type: 'array',
      title: 'Menu',
      of: [
        {
          type:'reference',
          options: {
            disableNew: true,
          },
          to: [
            { type: 'flexibleContent' },
            { type: 'articleContent' },
            { type: 'categoryTaxonomy' },
          ]
        }
      ],
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

export default routeSetting