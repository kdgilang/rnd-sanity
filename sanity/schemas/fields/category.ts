
import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class CategodyProps extends BasePropsModel { }

const categodyField = (props?: CategodyProps) => {
  const {
    mandatory
  } = props || new CategodyProps()

  return {
    name: 'categories',
    title: 'Categories',
    type: 'array',
    of: [
      {
        type: 'reference',
        to: [
          { type: 'categoryTaxonomy' },
        ]
      }
    ],
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default categodyField