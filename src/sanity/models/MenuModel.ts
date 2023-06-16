import { SlugModel } from "@sanity/models/SlugModel"
import { BaseDocumentModel } from "./BaseModel"

class MenuModel extends BaseDocumentModel {
  label: string
  slug: SlugModel

  constructor() {
    super()
    this.label = ''
    this.slug = new SlugModel()
  }
}

export default MenuModel