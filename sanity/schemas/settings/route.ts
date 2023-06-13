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
          name: 'link',
          type: 'link',
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