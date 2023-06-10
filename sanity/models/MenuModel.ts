import { SlugModel } from "@sanity/models/SlugModel"
import { BaseDocumentModel } from "./BaseModel"

class MenuModel extends BaseDocumentModel {
  menuName: string
  slug: SlugModel
  _type: string

  constructor() {
    super()
    this._type = ''
    this.menuName = ''
    this.slug = new SlugModel()
  }
}

export default MenuModel