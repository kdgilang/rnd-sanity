import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class IconProps extends BasePropsModel {}

const iconField = (props?: IconProps) => {
  const {
    mandatory
  } = props || new IconProps()
  
  return {
    name: 'icon',
    type: 'iconPicker',
    title: 'Icon',
    options: {
      outputFormat: 'react',
      providers: ["fa", "im", "io"],
    },
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default iconField