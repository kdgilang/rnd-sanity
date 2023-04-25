import { Inter } from 'next/font/google'
import Hero from '@components/Hero'
import getPageBySlugService from '@services/getPageBySlugService'
import Section from '@components/Section'

const inter = Inter({ subsets: ['latin'] })

const getData = async (slug: string) => {
  const data = await getPageBySlugService(slug)
  const { sections, title, content, settings, hero } = data

  return {
    hero,
    title,
    content,
    sections,
    settings
  }
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { title, settings, content } = await getData(params.slug)

  return {
    title: `${settings.site_name} | ${title}`,
    description: content,
  };
}

export default async function Pages({ params }: { params: { slug: string }}) {

  const { title, hero, sections } = await getData(params.slug)

  return (
    <main>
      { title && <h1 className="sr-only">{ title }</h1> }
      <Hero data={hero} />
      <Section items={sections} />
    </main>
  )
}
