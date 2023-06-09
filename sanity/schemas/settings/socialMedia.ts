import { Rule } from "sanity"
import iconField from "../fields/icon"

const socialMedia = {
  name: 'socialMediaSetting',
  type: 'document',
  title: 'Social Media',
  fields: [
    {
      name: 'socialItems',
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
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

export default socialMedia