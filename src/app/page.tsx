import Hero from '@components/Hero'
import getPageBySlugService from '@services/getPageBySlugService'
import Section from '@components/Section'
import getSiteSettingsService from './services/getSiteSettingsService'

const getData = async () => {
  const data = await getPageBySlugService('home')
  const { sections, title, content, hero } = data

  return {
    hero,
    title,
    content,
    sections
  }
}

export async function generateMetadata() {
  const settings = await getSiteSettingsService()
  const { title, content } = await getData()

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
