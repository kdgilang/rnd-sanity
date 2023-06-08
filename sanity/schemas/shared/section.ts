import { Rule } from "sanity";
import spacings from "../variables/spacings";
import containers from "../variables/containers";
import columns from "../variables/columns";

const sectionField = {
  name: 'section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'spacing',
      type: 'string',
      title: 'Spacing',
      options: {
        list: spacings.map(({title, value}) => ({title, value})),
        layout: 'select',
        default: spacings[0]
      },
    },
    {
      name: 'container',
      type: 'string',
      title: 'Container',
      options: {
        list: containers.map(({title, value}) => ({title, value})),
        layout: 'select',
        default: containers[0]
      },
    },
    {
      name: 'column',
      type: 'string',
      title: 'Column',
      options: {
        list: columns.map(({title, value}) => ({title, value})),
        layout: 'select',
        default: columns[0],
      },
    },
    // {
    //   name: 'color',
    //   type: 'color',
    //   title: 'Color',
    // },
  ]
}

export default sectionField;