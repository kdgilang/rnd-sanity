import { IoIosPaper } from "react-icons/io";
import metaFields from "../fields/meta";
import slugField from "../fields/slug";
import bodyField from "../fields/body";
import categodyField from "../fields/category";

const article = {
  icon: IoIosPaper,
  name: 'articleContent',
  type: 'document',
  title: 'Article',
  fields: [
    ...metaFields(),
    slugField(),
    categodyField(),
    bodyField({
      mandatory: true
    })
  ]
}

export default article