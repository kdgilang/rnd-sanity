import { IoMdMail } from "react-icons/io";
import nameField from "../fields/name";

const inquiry = {
  icon: IoMdMail,
  name: 'inquiry',
  type: 'document',
  title: 'Inquiry',
  fields: [
    nameField(),
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
    },
  ]
}

export default inquiry