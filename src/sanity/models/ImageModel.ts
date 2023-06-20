import type { Image, ImageCrop, ImageHotspot } from 'sanity'
import { BaseRefModel } from './BaseModel'

class ImageModel implements Image {
  [key: string]: unknown
  _id: string
  crop?: ImageCrop | undefined
  _type: string
  title: string
  altText: string
  url: string
  path: string
  asset?: BaseRefModel
  hotspot?: ImageHotspot | undefined

  constructor() {
    this._id = ''
    this._type = ''
    this.title = ''
    this.altText = ''
    this.url = ''
    this.path = ''
    this.asset = new BaseRefModel()
  }
}

export default ImageModel;