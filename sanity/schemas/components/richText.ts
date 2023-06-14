import { ImFontSize } from 'react-icons/im'
import nameField from '../fields/name'
import bodyField from '../fields/body'

export const richTextComponent = {
  icon: ImFontSize,
  name: 'richTextComponent',
  type: 'document',
  title: 'Rich Text',
  fields: [
    nameField({
      mandatory: true
    }),
    bodyField({
        mandatory: true
    })
  ]
}
