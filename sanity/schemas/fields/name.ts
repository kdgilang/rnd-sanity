import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class NameProps extends BasePropsModel {}

const nameField = (props?: NameProps) => {
  const {
    mandatory
  } = props || new NameProps()
  
  return {
    name: 'name',
    type: 'string',
    title: 'Name',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default nameField