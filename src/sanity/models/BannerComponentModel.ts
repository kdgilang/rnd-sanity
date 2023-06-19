import { BaseDocumentModel } from "./BaseModel"
import LinkModel from "./LinkModel"
import ImageModel from "./ImageModel"

class BannerComponentModel extends BaseDocumentModel {
  title: string
  image: ImageModel
  descirption: string
  link: LinkModel

  constructor() {
    super()

    this.title = ''
    this.descirption = ''
    this.image = new ImageModel()
    this.link = new LinkModel()
  }
}

export default BannerComponentModel