import { BaseRefModel } from "./BaseModel";
import MenuModel from "./MenuModel";

class LinkModel extends BaseRefModel {
  _key: string
  ref: MenuModel
  uri: string
  isExternal: boolean
  label: string

  constructor() {
    super()
    this._key = ''
    this.ref = new MenuModel()
    this.uri = ''
    this.isExternal = false
    this.label = ''
  }
}

export default LinkModel