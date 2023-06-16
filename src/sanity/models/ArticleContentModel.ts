import { TypedObject } from "sanity";
import { BaseDocumentModel } from "./BaseModel";
import ImageModel from "./ImageModel";
import { SlugModel } from "./SlugModel";

class ArticleContentModel extends BaseDocumentModel {
  body: TypedObject | TypedObject[]


  constructor() {
    super()
    this.body = []
  }
}

export default ArticleContentModel