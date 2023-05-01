import Hero from '@components/Hero'
import getPageBySlugService from '@services/getPageBySlugService'
import Section from '@components/Section'

const getData = async (slug: string) => {
  const data = await getPageBySlugService(slug)

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

  const { title, hero, sections } = await getData(params.slug)

  return (
    <main>
      { title && <h1 className="sr-only">{ title }</h1> }
      <Hero data={hero} />
      <Section items={sections} />
    </main>
  )
}
