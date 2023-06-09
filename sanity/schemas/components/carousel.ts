import { ImImages } from 'react-icons/im'
import { Rule } from "sanity"
import ctaFields from '../fields/cta'
import metaFields from '../fields/meta'

export const carouselComponent = {
  icon: ImImages,
  name: 'carouselComponent',
  type: 'document',
  title: 'Carousel',
  fields: [
    {
      name: 'carouselItems',
      type: 'array',
      title: 'Carousel Items',
      of: [{ type: 'carouselItem' }],
      validation: (Rule: Rule) => Rule.required()
    }
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