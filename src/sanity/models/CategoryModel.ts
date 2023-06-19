import { BaseDocumentModel } from "./BaseModel"
import { SlugModel } from "./SlugModel"

export default class CategoryModel extends BaseDocumentModel {
  title: string
  icon: any
  description: string
  slug: SlugModel

  constructor() {
    super()

    this.title = ''
    this.description = ''
    this.icon = ''
    this.slug = new SlugModel()
  }
}