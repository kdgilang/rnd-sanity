import Hero from '@components/Hero'
import Gallery from '../components/sections/Gallery'
import getGalleriesService from '../services/getGalleriesService'

const getData = async () => {
  const data = await getGalleriesService(1)

  return data
}

export async function generateMetadata() {
  const { settings } = await getData()

  return {
    title: `Galleries | ${settings.site_name}`,
    description: `Galleries of ${settings.site_name}`,
  };
}

export default async function Page() {
  const data = await getData()
  const gallery = data?.galleries?.[0]

  data?.galleries?.forEach((item: any) => {
    item.path = `/galleries/${item.slug}`
  })

  return (
    <main>
      <div className="container pt-50"></div>
      <div className="container section-padding">
        <div className="d-inline-block text-left">
          <h2>Galleries</h2>
          <div className="line wow fadeInUp" data-wow-delay="200ms"></div>
        </div>
        <Gallery data={data} isAjax={true} />
      </div>
    </main>
  )
}
