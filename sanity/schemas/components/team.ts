import { ImUser } from 'react-icons/im'
import metaFields from '../fields/meta'
import { Rule } from 'sanity'

export const teamComponent = {
  icon: ImUser,
  name: 'teamComponent',
  type: 'document',
  title: 'Team',
  fields: [
    ...metaFields(),
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required() 
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }]
    }
  ]
}