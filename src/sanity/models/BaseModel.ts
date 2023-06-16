import type { SanityDocument } from "@sanity/client";
import ImageModel from "./ImageModel";
import { SlugModel } from "./SlugModel";

export class BaseDocumentModel implements SanityDocument {
  _id: string
  _rev: string
  _type: string
  _createdAt: string
  _updatedAt: string
  image: ImageModel
  title: string
  slug: SlugModel
  description: string

  constructor() {
    this._id = ''
    this._rev = ''
    this._type = ''
    this._createdAt = ''
    this._updatedAt = ''
    this.image = new ImageModel()
    this.title = ''
    this.description = ''
    this.slug = new SlugModel()
  }
}

export class BaseListModel {
  _key: string
  _type: string

  constructor() {
    this._key = ''
    this._type = ''
  }
}

export class BaseRefModel {
  _ref: string
  _type: string
  _weak: boolean

  constructor() {
    this._ref = ''
    this._type = ''
    this._weak = false
  }
}