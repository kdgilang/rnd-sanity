import { Rule } from "sanity";
import BasePropsModel from "../BasePropsModel";
import nameField from "./name";

type hidden = (args: any) => void

class AuthorProps extends BasePropsModel {
  hidden?: hidden

  constructor() {
    super()
    this.hidden = () => { }
  }
}

const authorField = (props?: AuthorProps) => {
  const {
    mandatory,
    hidden
  } = props || new AuthorProps()
  return {
    hidden,
    name: 'author',
    type: 'object',
    title: 'author',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null),
    fieldsets: [
      {
        name: 'author',
        title: '',
        options: {
          collapsible: true,
          collapsed: false,
          modal: { type: 'popover' }
        },
      }
    ],
    fields: [
      nameField(),
      {
        name: 'id',
        type: 'string',
        title: 'ID',
        fieldset: 'author'
      },
    ],
    initialValue: {
      isExternal: false,
    }
  }
}

export default authorField;