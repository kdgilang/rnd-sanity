import { Rule } from "sanity";
import { margins, paddings } from "../variables/spacings";
import {containerSizes} from "../variables/sizes";
import titleField from "../fields/title";

const sectionField = {
  name: 'section',
  type: 'object',
  title: 'Section',
  fields: [
    titleField(),
    {
      name: 'marginY',
      type: 'string',
      title: 'Vertical Margin',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: margins.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
    },
    {
      name: 'paddingY',
      type: 'string',
      title: 'Vertical Padding',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: paddings.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
    },
    {
      name: 'container',
      type: 'string',
      title: 'Container',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: containerSizes.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
    },
    {
      name: 'component',
      type: 'reference',
      title: 'Component',
      layout: 'grid',
      // weak: true,
      validation: (Rule: Rule) => Rule.required(),
      to: [
        { type: 'accordionComponent', },
        { type: 'bannerComponent', },
        { type: 'cardComponent', },
        { type: 'carouselComponent', },
        { type: 'collectionComponent', },
        { type: 'embedComponent', },
        { type: 'mediaTileComponent', },
        { type: 'richTextComponent', },
      ],
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
  ],
  preview: {
    select: {
      type: 'component._type',
      title: 'component.title',
      name: 'component.name',
    },
    prepare(selection: any) {
      const {name, type, title} = selection

      return {
        title: `${name ? name : title} (${type?.replace('Component', '')})`
      }
    }
  }
}

export default sectionField;