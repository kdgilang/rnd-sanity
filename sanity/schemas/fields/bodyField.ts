
import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class DescriptionProps extends BasePropsModel { }

const bodyField = (props?: DescriptionProps) => {
  const {
    mandatory
  } = props || new DescriptionProps()

  return {
    name: 'body',
    title: 'Title',
    type: 'array',
    of: [{ type: 'block' }],
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default bodyField