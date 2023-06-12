import { IoIosPaper } from "react-icons/io";
import metaFields from "../fields/meta";
import slugField from "../fields/slug";
import menuNameField from "../fields/menuName";
import bodyField from "../fields/body";

const article = {
  icon: IoIosPaper,
  name: 'articleContent',
  type: 'document',
  title: 'Article',
  fields: [
    ...metaFields(),
    slugField(),
    menuNameField(),
    bodyField({
      mandatory: true
    })
  ]
}

export default article