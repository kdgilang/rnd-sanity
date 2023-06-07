import { ThListIcon } from "@sanity/icons";
import slugField from "../shared/slug";
import { Rule } from "sanity";

const flexiblePage = {
  icon: ThListIcon,
  name: 'flexiblePages',
  type: 'document',
  title: 'Flexible Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required()
    },
    {...slugField},
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}

export default flexiblePage