import type { Image, ImageCrop, ImageHotspot } from 'sanity'
import { BaseRefModel } from './BaseModel'

class ImageModel implements Image {
  [key: string]: unknown
  crop?: ImageCrop | undefined
  _type: string
  asset?: BaseRefModel
  hotspot?: ImageHotspot | undefined

  constructor() {
    this._type = ''
    this.asset = new BaseRefModel()
  }
}

export default ImageModel;