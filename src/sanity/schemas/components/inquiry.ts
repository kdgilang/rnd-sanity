import { FaWpforms } from 'react-icons/fa'
import nameField from '../fields/name'

export const inquiryComponent = {
  icon: FaWpforms,
  name: 'inquiryComponent',
  type: 'document',
  title: 'Inquiry Form',
  fields: [
    nameField({
      mandatory: true
    }),
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}