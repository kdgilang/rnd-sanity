import { IoIosPaper } from "react-icons/io";
import metaFields from "../fields/meta";
import slugField from "../fields/slug";
import menuNameField from "../fields/menuName";

const article = {
  icon: IoIosPaper,
  name: 'articleContent',
  type: 'document',
  title: 'Article',
  fields: [
    ...metaFields(),
    menuNameField(),
    slugField(),
  ]
}

export default article