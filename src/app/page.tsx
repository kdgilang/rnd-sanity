import Hero from '@components/Hero'
import getPageBySlugService from '@services/getPageBySlugService'
import Section from '@components/Section'
import getSiteSettingsService from './services/getSiteSettingsService'

const getData = async () => {
  const settings = await getSiteSettingsService()
  const homeSlug = settings.home_page.slug
  const data = await getPageBySlugService(homeSlug)
  const { sections, title, content, hero } = data

  return {
    hero,
    title,
    content,
    sections,
    settings
  }
}

export async function generateMetadata() {
  const { title, content, settings } = await getData()

  return {
    title: `${settings.site_name} | ${title}`,
    description: content,
  };
}

export default async function Page() {

  const { title, hero, sections } = await getData()

  return (
    <main>
      { title && <h1 className="sr-only">{ title }</h1> }
      <Hero data={hero} />
      <Section items={sections} />
    </main>
  )
}
