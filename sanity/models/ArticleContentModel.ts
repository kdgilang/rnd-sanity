import { TypedObject } from "sanity";
import { BaseDocumentModel } from "./BaseModel";
import ImageModel from "./ImageModel";
import { SlugModel } from "./SlugModel";

class ArticleContentModel extends BaseDocumentModel {
  title: string
  slug: SlugModel
  description: string
  image: ImageModel
  body: TypedObject | TypedObject[]


  constructor() {
    super()
    this.title = ''
    this.slug = new SlugModel()
    this.description = ''
    this.image = new ImageModel()
    this.body = []
  }
}

export default ArticleContentModel