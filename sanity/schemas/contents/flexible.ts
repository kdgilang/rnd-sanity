import { IoIosPaper } from "react-icons/io";
import slugField from "../fields/slug";
import { Rule } from "sanity";
import metaFields from "../fields/meta";

const flexible = {
  icon: IoIosPaper,
  name: 'flexibleContent',
  type: 'document',
  title: 'Flexible',
  fields: [
    ...metaFields(),
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