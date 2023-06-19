import { BaseDocumentModel } from "./BaseModel"
import { SlugModel } from "./SlugModel"

export default class CategoryModel extends BaseDocumentModel {
  title: string
  icon: any
  descirption: string
  slug: SlugModel

  constructor() {
    super()

    this.title = ''
    this.descirption = ''
    this.icon = ''
    this.slug = new SlugModel()
  }
}