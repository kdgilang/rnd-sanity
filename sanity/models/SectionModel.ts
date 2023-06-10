import { BaseListModel } from "./BaseModel";

class SectionModel extends BaseListModel {
  title: string
  component: any
  container: string
  marginY: string
  paddingY: string
  color: ColorModel

  constructor() {
    super()
    this.title = ""
    this.component = ""
    this.container = ""
    this.marginY = ""
    this.paddingY = ""
    this.color = new ColorModel()
  }
}

class ColorModel {
  hex: string

  constructor() {
    this.hex = ''
  }
}

export default SectionModel