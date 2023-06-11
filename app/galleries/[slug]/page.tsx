import Hero from 'app/components/Hero'
import Section from 'app/components/Section'
import Carousel from 'app/components/sections/Carousel'
import getGalleryBySlugService from '@sanity/services/getGalleryBySlugService'
import getSiteSettingsService from '@sanity/services/getSiteSettingService'

const getData = async (slug: string) => {
  const data = await getGalleryBySlugService(slug)

  return data
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const settings = await getSiteSettingsService()
  const { title, content } = await getData(params.slug)

  return {
    title: `${settings.site_name} | ${title}`,
    description: content,
  };
}

export default async function Page({ params }: { params: { slug: string }}) {

  const { title, body, images, content } = await getData(params.slug)

  const hero = {
    __component: 'single-image',
    title,
    image: images?.[0],
    content: '',
  }

  const carousel = {
    title: '',
    content: '',
    images: images as any[],
    itemsToShow: 3
  }

  return (
    <main>
      { title && <h1 className="sr-only">{ title }</h1> }
      <Hero data={hero} />
      <div className="container section-padding blog-details-text">
        <Carousel data={carousel} className="mb-5" />
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    </main>
  )
}
