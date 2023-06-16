import { ImImage } from 'react-icons/im'
import linkFields from '../fields/link'
import metaFields from '../fields/meta'
import alignField from '../fields/align'

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
    linkFields()
  ]
}