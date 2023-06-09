import { Rule } from "sanity"
import BasePropsModel from "../BasePropsModel"

class VideoProps extends BasePropsModel {}

const videoField = (props?: VideoProps) => {
  const {
    mandatory
  } = props || new VideoProps()
  
  return {
    name: 'video_url',
    type: 'url',
    title: 'Video Url',
    ...(mandatory ? { validation: (Rule: Rule) => Rule.required() } : null)
  }
}

export default videoField