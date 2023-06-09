import type { SanityDocument } from "@sanity/client";

class BaseModel implements SanityDocument {
  _id: string
  _rev: string
  _type: string
  _createdAt: string
  _updatedAt: string

  constructor() {
    this._id = ''
    this._rev = ''
    this._type = ''
    this._createdAt = ''
    this._updatedAt = ''
  }
}

export default BaseModel