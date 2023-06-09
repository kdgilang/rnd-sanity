import type { Image, ImageCrop, ImageHotspot } from 'sanity'

class ImageModel implements Image {
  [key: string]: unknown
  crop?: ImageCrop | undefined
  _type: string
  asset?: AssetModel
  hotspot?: ImageHotspot | undefined

  constructor() {
    this._type = ''
    this.asset = new AssetModel()
  }
}

class AssetModel {
  _ref: string
  _type: string

  constructor() {
    this._ref = ''
    this._type = ''
  }
}

export default ImageModel;