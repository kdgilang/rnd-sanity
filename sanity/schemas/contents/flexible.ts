import { IoIosPaper } from "react-icons/io";
import slugField from "../shared/slug";
import { Rule } from "sanity";
import metaFields from "../shared/meta";

const flexible = {
  icon: IoIosPaper,
  name: 'flexibleContent',
  type: 'document',
  title: 'Flexible',
  fields: [
    ...metaFields,
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