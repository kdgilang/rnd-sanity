import { ImImage } from 'react-icons/im'
import { Rule } from 'sanity'
import ctaFields from '../fields/cta'
import metaFields from '../fields/meta'

export const bannerComponent = {
  icon: ImImage,
  name: 'bannerComponent',
  type: 'document',
  title: 'Banner',
  fields: [
    ...metaFields(),
    ...ctaFields
  ]
}