import { ImImage } from 'react-icons/im'
import ctaFields from '../fields/cta'
import metaFields from '../fields/meta'
import alignField from '../fields/alignField'

export const bannerComponent = {
  icon: ImImage,
  name: 'bannerComponent',
  type: 'document',
  title: 'Banner',
  fields: [
    ...metaFields(),
    alignField({
      mandatory: true
    }),
    ...ctaFields
  ]
}