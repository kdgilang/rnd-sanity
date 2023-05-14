import Hero from '@components/Hero'
import getPageBySlugService from '@services/getPageBySlugService'
import Section from '@components/Section'
import getSiteSettingsService from '@services/getSiteSettingsService'
import { notFound } from 'next/navigation'

const getData = async (slug: string) => {
  try {
    const data = await getPageBySlugService(slug)
    const { sections, title, content, hero, createdAt } = data
  
    if (hero.__component === 'single-image') {
      hero.date = new Date(createdAt).toLocaleDateString()
    }
  
    return {
      hero,
      title,
      content,
      sections
    } 
  } catch(err) {
    notFound()
  }
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const settings = await getSiteSettingsService()
  const { title, content } = await getData(params.slug)

  return {
    title: `${settings.site_name} | ${title}`,
    description: content,
  };
}

export default async function Page({ params }: { c: { slug: string }}) {
  const { title, hero, sections, date } = await getData(params.slug)

  return (
    <main>
      { title && <h1 className="sr-only">{ title }</h1> }
      <Hero data={hero} />
      <Section items={sections} />
    </main>
  )
}
