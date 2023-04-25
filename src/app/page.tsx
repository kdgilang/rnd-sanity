import { Inter } from 'next/font/google'
import Hero, { HeroPropsType } from './components/Hero'
import getPageBySlugService from './services/getPageBySlugService'
import Section from './components/Section'

const inter = Inter({ subsets: ['latin'] })

const getData = async () => {
  const data = await getPageBySlugService('home')
  const { sections, title, content, settings } = data
  const hero = data?.hero
  const heroData: HeroPropsType = {
    type: hero?.__component,
    animations: hero?.animations,
    items: hero?.carousel_items?.map((
      {id, title, content, image}: any
    ) => ({ 
      id,
      title,
      content,
      mediaSrc: image.url,
      buttonUrl: '#',
      buttonText: 'Test'
    }))
  }

  return { 
    title,
    content,
    heroData,
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
  const { title, heroData, sections } = await getData()

  return (
    <main>
      { title && <h1 className="sr-only">{ title }</h1> }
      <Hero {...heroData} />
      <Section items={sections} />
    </main>
  )
}
