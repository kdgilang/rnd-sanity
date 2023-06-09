import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class DescriptionProps  extends BasePropsModel {}

const descriptionField = (props?: DescriptionProps) => {
  const {
    mandatory
  } = props || new DescriptionProps()
  
  return {
    name: 'description',
    type: 'text',
    title: 'Description',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default descriptionField