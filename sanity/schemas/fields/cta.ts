import { Rule } from "sanity";

const ctaFields = [
  {
    name: 'cta',
    type: 'object',
    title: 'CTA Link',
    validation: (Rule: Rule) => Rule.required(),
    fieldsets: [
      {
        name: 'cta',
        title: '',
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
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
        fieldset: 'cta',
        layout: 'checkbox',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'uri',
        type: 'url',
        title: 'Url',
        fieldset: 'cta',
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
        name: 'link',
        type: 'reference',
        title: 'Select',
        fieldset: 'cta',
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
        fieldset: 'cta',
        validation: (Rule: Rule) => Rule.required(),
      }
    ],
  },
]
  
export default ctaFields;