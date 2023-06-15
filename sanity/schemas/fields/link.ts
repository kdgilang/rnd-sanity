import { Rule } from "sanity";
import BasePropsModel from "../BasePropsModel";

type hidden = (args: any) => void

class LinkProps extends BasePropsModel {
  hidden?: hidden

  constructor() {
    super()
    this.hidden = () => {}
  }
}

const linkFields = (props?: LinkProps) => {
  const {
    mandatory,
    hidden
  } = props || new LinkProps()
  return [
    {
      hidden,
      name: 'link',
      type: 'object',
      title: 'Link',
      fieldsets: [
        {
          name: 'link',
          title: '',
          options: {
            collapsible: true,
            collapsed: false,
            modal: {type: 'popover'}
          },
        }
      ],
      fields: [
        {
          name: 'isExternal',
          type: 'boolean',
          title: 'External Link',
          fieldset: 'link',
          layout: 'checkbox',
          initialVaule: false,
        },
        {
          name: 'uri',
          type: 'url',
          title: 'Url',
          fieldset: 'link',
          hidden: ({parent}: any) => !parent?.isExternal,
          validation: (Rule: Rule) => Rule.custom((val, ctx) => {
            //@ts-ignore
            if (ctx?.parent?.isExternal && !val) {
              return 'Url is required.'
            }
            return true
          }),
        },
        {
          name: 'ref',
          type: 'reference',
          title: 'Select Reference',
          fieldset: 'link',
          options: {
            disableNew: true,
          },
          hidden: ({parent}: any) => parent?.isExternal,
          validation: (Rule: Rule) => Rule.custom((val, ctx) => {
            //@ts-ignore
            if (!ctx?.parent?.isExternal && !val) {
              return 'Reference is required.'
            }
            return true
          }),
          to: [{ type: 'articleContent' }, { type: 'flexibleContent' }]
        },
        {
          name: 'label',
          type: 'string',
          title: 'Label',
          fieldset: 'link',
          validation: (Rule: Rule) => Rule.required(),
        }
      ],
      initialValue: {
        isExternal: false,
      }
    },
  ]
}
  
export default linkFields;