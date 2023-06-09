import { Rule } from "sanity"
import iconField from "../fields/icon"

// const socialField = () => ({
//   name: 'social',
//   type: 'object',
//   fieldsets: [
//     { name }
//   ],
//   options:{
//     collapsible: true
//   },
//   fields: [
//     iconField(),
//     {
//       name: 'uri',
//       type: 'url',
//       title: `Url`,
//     }
//   ]
// })

const socialMedia = {
  name: 'socialMediaSetting',
  type: 'document',
  title: 'Social Media',
  fields: [
    {
      name: 'socials',
      type: 'array',
      of: [
        {
          type:'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
              validation: (Rule: Rule) => Rule.required()
            },
            iconField(),
            {
              name: 'uri',
              type: 'url',
              title: `Url`,
            }
          ]
        }
      ],
    }
  ]
}

export default socialMedia