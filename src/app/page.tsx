import { Inter } from 'next/font/google'
import Hero, { HeroPropsType } from './components/Hero'
import getPageBySlugService from './services/getPageBySlugService'

const inter = Inter({ subsets: ['latin'] })

const getData = async () => {
  const data = await getPageBySlugService('home')
  const hero = data?.Hero?.[0]
  const heroData: HeroPropsType = {
    type: hero?.__component?.replace('component.', ''),
    animations: hero?.Animations,
    items: hero?.Carousel_Items?.map((item: any) => ({ 
      id: item.id,
      title: item.Title,
      content: item.Content,
      mediaSrc: item.Image.url,
      buttonUrl: '#',
      buttonText: 'Test'
    }))
  }

  return { heroData }
}

export default async function Page() {
  const { heroData } = await getData()


  return (
    <>
      <Hero {...heroData} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {JSON.stringify(heroData)}
      </main>
    </>
  )
}
