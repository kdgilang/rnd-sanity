import { Rule } from "sanity";

const slugField = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  validation: (Rule: Rule) => Rule.required(),
  options: {
    source: 'title',
    maxLength: 200, // will be ignored if slugify is set
    slugify: (input: any) => input
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .slice(0, 200)
  }
}
  
export default slugField;