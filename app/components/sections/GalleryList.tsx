import getGalleriesService from 'app/services/getGalleriesService'
import Gallery from './Gallery'


export default async function GalleryList() {
  const data = await getGalleriesService(10)

  return <Gallery data={data} isAjax={true} />
}
