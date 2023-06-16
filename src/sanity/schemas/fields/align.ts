import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"
import {aligns} from "../variables/aligns"

class AlignProps extends BasePropsModel { }

const alignField = (props?: AlignProps) => {
  const {
    mandatory
  } = props || new AlignProps()

  return {
    name: 'align',
    type: 'string',
    title: 'Align',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null),
    options: {
      list: aligns.map(({ title, value }) => ({ title, value })),
      layout: 'select',
    },
  }
}

export default alignField