import Hero from '@components/Hero'
import getPageBySlugService from '@services/getPageBySlugService'
import Section from '@components/Section'

const getData = async () => {
  const data = await getPageBySlugService('home')
  const { sections, title, content, settings, hero } = data

  return {
    hero,
    title,
    content,
    sections,
    settings
  }
}

export async function generateMetadata() {
  const { title, settings, content } = await getData()

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
