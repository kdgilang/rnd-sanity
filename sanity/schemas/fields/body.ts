
import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class BodyProps extends BasePropsModel { }

const bodyField = (props?: BodyProps) => {
  const {
    mandatory
  } = props || new BodyProps()

  return {
    name: 'body',
    title: 'Body',
    type: 'array',
    of: [{ type: 'block' }],
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default bodyField