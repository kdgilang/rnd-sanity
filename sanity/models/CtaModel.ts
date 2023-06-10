import { BaseRefModel } from "./BaseModel";
import MenuModel from "./MenuModel";

class CtaModel extends BaseRefModel{
  link: MenuModel
  uri: string
  isExternal: boolean
  label: string

  constructor() {
    super()

    this.link = new MenuModel()
    this.uri = ''
    this.isExternal = false
    this.label = ''
  }
}

export default CtaModel