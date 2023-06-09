import { Rule } from "sanity";
import imageField from "./image";
import titleField from "./title";
import descriptionField from "./description";

class MetaProps {
  mandatoryTitle?: boolean
  mandatoryDescription?: boolean
  mandatoryImage?: boolean

  constructor() {
    this.mandatoryTitle = true
    this.mandatoryDescription = true
    this.mandatoryImage = true
  }
}

const metaFields = (props?: MetaProps) => {
  const {
    mandatoryTitle,
    mandatoryDescription,
    mandatoryImage
  } = props || new MetaProps()

  return [
    imageField({
      mandatory: mandatoryImage
    }),
    titleField({
      mandatory: mandatoryTitle
    }),
    descriptionField({
      mandatory: mandatoryDescription
    })
  ]
}
  
export default metaFields;