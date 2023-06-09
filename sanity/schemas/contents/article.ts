import { IoIosPaper } from "react-icons/io";
import metaFields from "../fields/meta";
import slugField from "../fields/slug";

const article = {
  icon: IoIosPaper,
  name: 'articleContent',
  type: 'document',
  title: 'Article',
  fields: [
    ...metaFields(),
    slugField(),
  ]
}

export default article