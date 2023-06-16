import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"
import nameField from "./name"
import iconField from "./icon"

class NetworkProps extends BasePropsModel {}

const networkField = (props?: NetworkProps) => {
  const {
    mandatory
  } = props || new NetworkProps()
  
  return {
    name: 'networkItems',
    type: 'array',
    of: [
      {
        type:'object',
        fields: [
          nameField({
            mandatory
          }),
          iconField({
            mandatory
          }),
          {
            name: 'uri',
            type: 'string',
            title: `Url`,
            ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
          }
        ]
      }
    ],
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default networkField