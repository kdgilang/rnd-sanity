import { ImPlay } from 'react-icons/im'
import imageField from '../fields/image'
import videoField from '../fields/video'

export const mediaTileComponent = {
  icon: ImPlay,
  name: 'mediaTileComponent',
  type: 'document',
  title: 'Media Tile',
  fields: [
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }]
    },
    imageField({
      mandatory: true
    }),
    videoField({
      mandatory: false
    })
  ]
}