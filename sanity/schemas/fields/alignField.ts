import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"
import {aligns} from "../variables/aligns"

class TitleProps extends BasePropsModel { }

const alignField = (props?: TitleProps) => {
  const {
    mandatory
  } = props || new TitleProps()

  return {
    name: 'align',
    type: 'string',
    title: 'Align',
    validation: (Rule: Rule) => Rule.required(),
    options: {
      list: aligns.map(({ title, value }) => ({ title, value })),
      layout: 'select',
    },
  }
}

export default alignField