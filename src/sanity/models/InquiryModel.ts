import { BaseDocumentModel } from "./BaseModel";

class InquiryModel extends BaseDocumentModel {
  name: string
  email: string
  message: string
  phone: string
  
  constructor() {
    super()
    this.name = ''
    this.email = ''
    this.phone = ''
    this.message = ''
  }

  static create({ name, email, phone, message }: {
    name: string,
    email: string,
    phone: string,
    message: string,
  }) {
    return {
      _type: 'inquiry',
      name,
      email,
      phone,
      message
    }
  }
}

export default InquiryModel