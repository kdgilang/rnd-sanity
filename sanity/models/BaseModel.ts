import type { SanityDocument } from "@sanity/client";

class BaseModel implements SanityDocument {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string

  constructor() {
    this._createdAt = ''
    this._id = ''
    this._rev = ''
    this._type = ''
    this._updatedAt = ''
  }
}

export default BaseModel