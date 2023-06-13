import { BaseDocumentModel } from "./BaseModel";
import ImageModel from "./ImageModel";
import SectionModel from "./SectionModel";
import { SlugModel } from "./SlugModel";

class FlexibleContentModel extends BaseDocumentModel {
  title: string
  slug: SlugModel
  description: string
  image: ImageModel
  sections: SectionModel[]

  constructor() {
    super()
    this.title = ''
    this.slug = new SlugModel()
    this.description = ''
    this.image = new ImageModel()
    this.sections = new Array<SectionModel>()
  }
}

export default FlexibleContentModel