import { BaseDocumentModel } from "./BaseModel"
import CtaModel from "./CtaModel"
import ImageModel from "./ImageModel"

class BannerComponentModel extends BaseDocumentModel {
  title: string
  image: ImageModel
  descirption: string
  cta: CtaModel

  constructor() {
    super()

    this.title = ''
    this.descirption = ''
    this.image = new ImageModel()
    this.cta = new CtaModel()
  }
}