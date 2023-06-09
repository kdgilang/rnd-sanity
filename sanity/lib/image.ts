import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'
import ImageModel from '@sanity/models/ImageModel'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: ImageModel) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
