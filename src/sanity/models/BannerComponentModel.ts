import { BaseDocumentModel } from "./BaseModel"
import LinkModel from "./LinkModel"
import ImageModel from "./ImageModel"

class BannerComponentModel extends BaseDocumentModel {
  title: string
  image: ImageModel
  description: string
  link: LinkModel

  constructor() {
    super()

    this.title = ''
    this.description = ''
    this.image = new ImageModel()
    this.link = new LinkModel()
  }
}

export default BannerComponentModel