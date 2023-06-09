import { IoIosPaper } from "react-icons/io";
import slugField from "../fields/slug";
import metaFields from "../fields/meta";
import menuNameField from "../fields/menuName";

const flexible = {
  icon: IoIosPaper,
  name: 'flexibleContent',
  type: 'document',
  title: 'Flexible',
  fields: [
    ...metaFields(),
    menuNameField(),
    slugField(),
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