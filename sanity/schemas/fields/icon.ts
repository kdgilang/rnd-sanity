import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class TitleProps extends BasePropsModel {}

const iconField = (props?: TitleProps) => {
  const {
    mandatory
  } = props || new TitleProps()
  
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