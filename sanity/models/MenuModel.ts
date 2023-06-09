import { SlugModel } from "@sanity/models/SlugModel"

class MenuModel {
  menuName: string
  slug: SlugModel
  _type: string
  _key?: string

  constructor() {
    this._type = ''
    this.menuName = ''
    this.slug = new SlugModel()
  }
}

export default MenuModel