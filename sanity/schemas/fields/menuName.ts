import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class MenuNameProps extends BasePropsModel {
  constructor() {
    super()
    this.mandatory = true
  }
}

const menuNameField = (props?: MenuNameProps) => {
  const {
    mandatory
  } = props || new MenuNameProps()
  
  return {
    name: 'menuName',
    type: 'string',
    title: 'Menu Name',
    description: 'This field will be used in the menu label.',
    options: {
      source: 'title'
    },
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default menuNameField