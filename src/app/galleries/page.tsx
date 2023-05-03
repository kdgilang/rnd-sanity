import Hero from '@components/Hero'
import Gallery from '../components/sections/Gallery'
import getGalleriesService from '../services/getGalleriesService'
import SectionHeading from '../components/SectionHeading'

const getData = async () => {
  const data = await getGalleriesService(10)

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

  return (
    <main>
      <div className="container pt-50"></div>
      <div className="container section-padding">
        <SectionHeading title="Galleries" isCenter={false} />
        <Gallery data={data} isAjax={true} />
      </div>
    </main>
  )
}
