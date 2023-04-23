import { Inter } from 'next/font/google'
import Hero, { HeroPropsType } from './components/Hero'
import getPageBySlugService from './services/getPageBySlugService'
import Gallery from './components/sections/Gallery'
import Section from './components/Section'

const inter = Inter({ subsets: ['latin'] })

const getData = async () => {
  const data = await getPageBySlugService('home')
  const { sections, title, content } = data
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
    sections
  }
}

export default async function Page() {
  const { title, heroData, sections } = await getData()

  return (
    <>
      <h1 className="sr-only">{ title }</h1>
      <Hero {...heroData} />
      <main>
        <Section items={sections} />
      </main>
    </>
  )
}
