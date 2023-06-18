import { BaseContentModel } from "./BaseModel";
import SectionModel from "./SectionModel";

class FlexibleContentModel extends BaseContentModel {
  sections: SectionModel[]

  constructor() {
    super()
    this.sections = new Array<SectionModel>()
  }
}

export default FlexibleContentModel