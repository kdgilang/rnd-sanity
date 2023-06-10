import { BaseDocumentModel } from "./BaseModel"
  
export class SocailMediaSettingModel extends BaseDocumentModel {
  socialItems: SocialMediaModel[]
  
  constructor() {
    super()
    this.socialItems = new Array<SocialMediaModel>()
  }
}

export class SocialMediaModel {
  _type: string
  _key: string
  icon: IconModel
  uri: string
  name: string
  
  constructor() {
    this._key = ''
    this._type = ''
    this.icon = new IconModel()
    this.uri = ''
    this.name = ''
  }
}

export class IconModel {
  _type: string
  name: string
  provider: string

  constructor() {
    this._type = ''
    this.name = ''
    this.provider = ''
  }
}
  