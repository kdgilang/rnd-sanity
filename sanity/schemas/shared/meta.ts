import { Rule } from "sanity";
import slugField from "./slug";

const metaFields = [
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
  
export default metaFields;