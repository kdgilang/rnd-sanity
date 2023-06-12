import { IoIosPaper } from "react-icons/io";
import slugField from "../fields/slug";
import metaFields from "../fields/meta";
import menuNameField from "../fields/menuName";
import categodyField from "../fields/category";

const flexible = {
  icon: IoIosPaper,
  name: 'flexibleContent',
  type: 'document',
  title: 'Flexible',
  fields: [
    ...metaFields(),
    slugField(),
    menuNameField(),
    categodyField(),
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      group: 'sections',
      of: [{ type: 'section' }]
    }
  ],
  groups: [
    {
      name: 'sections',
      title: 'Sections',
    },
  ],
}

export default flexible