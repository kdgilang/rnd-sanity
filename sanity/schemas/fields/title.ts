import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class TitleProps extends BasePropsModel {}

const titleField = (props?: TitleProps) => {
  const {
    mandatory
  } = props || new TitleProps()
  
  return {
    name: 'title',
    type: 'string',
    title: 'Title',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default titleField