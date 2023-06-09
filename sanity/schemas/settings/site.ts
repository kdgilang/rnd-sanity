import { Rule } from "sanity"

const siteSetting = {
  name: 'siteSetting',
  type: 'document',
  title: 'Site',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Site Logo',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'name',
      type: 'string',
      title: 'Site Name',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site Description'
    }
  ]
}

export default siteSetting