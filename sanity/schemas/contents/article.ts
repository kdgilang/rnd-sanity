import { IoIosPaper } from "react-icons/io";
import metaFields from "../shared/meta";

const article = {
  icon: IoIosPaper,
  name: 'articelContent',
  type: 'document',
  title: 'Article',
  fields: [
    ...metaFields,
  ]
}

export default article