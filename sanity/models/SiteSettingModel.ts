import { BaseDocumentModel } from "./BaseModel"
import ImageModel from "./ImageModel"

class SisteSettingModel extends BaseDocumentModel {
  description: string
  logo: ImageModel
  name: string

  constructor() {
    super()
    this.description = ''
    this.logo = new ImageModel()
    this.name = ''
  }
}

export default SisteSettingModel;
