import { ImPlay } from 'react-icons/im'
import imageField from '../fields/image'
import videoField from '../fields/video'
import bodyField from '../fields/bodyField'

export const mediaTileComponent = {
  icon: ImPlay,
  name: 'mediaTileComponent',
  type: 'document',
  title: 'Media Tile',
  fields: [
    bodyField({
      mandatory: true
    }),
    imageField({
      mandatory: true
    }),
    videoField({
      mandatory: false
    })
  ]
}