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
  const hero = {
    ...gallery,
    image: gallery?.images[0],
    __component: 'single-image',
  }
  return (
    <main>
      <h1 className="sr-only">Galleries</h1>
      <Hero data={hero} />
      <div className="container-fluid section-padding">
        <Gallery data={data} isAjax={true} />
      </div>
    </main>
  )
}
