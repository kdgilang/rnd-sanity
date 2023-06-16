import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class ImageProps extends BasePropsModel {}

const imageField = (props?: ImageProps) => {
  const {
    mandatory
  } = props || new ImageProps()
  
  return {
    name: 'image',
    type: 'image',
    title: 'Image',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default imageField