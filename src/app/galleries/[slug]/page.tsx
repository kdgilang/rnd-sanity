import Hero from '@components/Hero'
import Section from '@components/Section'
import Carousel from '@src/app/components/sections/Carousel'
import getGalleryBySlugService from '@src/app/services/getGalleryBySlugService'

const getData = async (slug: string) => {
  const data = await getGalleryBySlugService(slug)

  return data
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { title, settings, content } = await getData(params.slug)

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
    images,
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
