import { BaseDocumentModel } from "./BaseModel";
import SectionModel from "./SectionModel";

class FlexibleContentModel extends BaseDocumentModel {
  sections: SectionModel[]

  constructor() {
    super()
    this.sections = new Array<SectionModel>()
  }
}

export default FlexibleContentModel