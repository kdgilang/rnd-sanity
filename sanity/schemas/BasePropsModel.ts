class BasePropsModel {
  mandatory?: boolean
  fieldset?: string

  constructor() {
    this.mandatory = false
    this.fieldset = ''
  }
}

export default BasePropsModel;