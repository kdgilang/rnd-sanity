import { ImImages } from 'react-icons/im'
import { Rule } from "sanity"
import ctaFields from '../fields/cta'
import metaFields from '../fields/meta'
import { carouselSizes } from '../variables/sizes'
import { carouselAnimations } from '../variables/animations'
import alignField from '../fields/alignField'

export const carouselComponent = {
  icon: ImImages,
  name: 'carouselComponent',
  type: 'document',
  title: 'Carousel',
  fields: [
    {
      name: 'animation',
      type: 'string',
      title: 'Carousel Animation',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: carouselAnimations.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
    },
    {
      name: 'size',
      type: 'string',
      title: 'Carousel Size',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: carouselSizes.map(({title, value}) => ({title, value})),
        layout: 'select',
      },
    },
    alignField({
      mandatory: true
    }),
    {
      name: 'carouselItems',
      type: 'array',
      title: 'Carousel Items',
      of: [{ type: 'carouselItem' }],
      validation: (Rule: Rule) => Rule.required()
    },
  ]
}

export const carouselItem = {
  name: 'carouselItem',
  type: 'object',
  title: 'Item',
  fields: [
    ...metaFields(),
    ...ctaFields
  ]
}