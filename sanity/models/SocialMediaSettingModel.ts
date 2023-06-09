import BaseModel from "./BaseModel"
import ImageModel from "./ImageModel"
  
export class SocailMediaSettingModel extends BaseModel {
    socials: SocialMediaModel[]
  
    constructor() {
      super()
      this.socials = new Array<SocialMediaModel>()
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
  