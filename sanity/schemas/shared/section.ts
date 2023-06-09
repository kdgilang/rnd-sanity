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
      name: 'components',
      type: 'reference',
      title: 'Components',
      layout: 'grid',
      weak: true,
      to: [
        {
          type: 'accordionComponent',
        },
        {
          type: 'carouselComponent',
        },
        {
          type: 'embedComponent',
        },
        {
          type: 'cardComponent',
        },
        {
          type: 'bannerComponent',
        },
        {
          type: 'teamComponent',
        },
        {
          type: 'mediaTileComponent',
        }
      ]
      // components: {
      //   preview: {
      //     select: {
      //       _key: "_key",
      //       title: "title",
      //       subtitle: "description"
      //     },
      //     prepare({ _key, title, subtitle }: any) {
      //       return { _key, title, subtitle };
      //     },
      //   }
      // }
      // validation: (Rule: Rule) => Rule.custom((_, context) => {
      //   const column = Number(context?.document?.column)
      //   if (column < 1) {
      //     return 'Please set column.'
      //   }
      //   console.log(context.document)
        
      //   return true
      // })
    },
    {
      name: 'color',
      type: 'color',
      title: 'Color',
    },
  ]
}

export default sectionField;