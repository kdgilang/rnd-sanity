import { TypedObject } from "sanity";
import { BaseContentModel } from "./BaseModel";

class ArticleContentModel extends BaseContentModel {
  body: TypedObject | TypedObject[]

  constructor() {
    super()
    this.body = []
  }
}

export default ArticleContentModel