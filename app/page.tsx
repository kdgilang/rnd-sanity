import Hero from 'app/components/Hero'
import getPageBySlugService from 'app/services/getPageBySlugService'
import Section from 'app/components/Section'
import getSiteSettingsService from './services/getSiteSettingsService'
import { groq } from 'next-sanity'
import type { SanityDocument } from "@sanity/client";
import { client } from "@sanity/lib/client";

const query = groq`*[_type == "flexiblePages" && defined(slug.current)]{
  _id,
  title, 
  slug,
  description
}`;


const getData = async () => {
  // const settings = await getSiteSettingsService()
  // const homeSlug = settings?.home_page?.slug
  // const data = await getPageBySlugService(homeSlug)
  // const { sections, title, content, hero } = data
  const data: SanityDocument[] = await client.fetch(query);

  return {
    hero: {},
    title: {},
    content: {
      data: data[0]
    },
    sections: {},
    settings: {}
  }
}

// export async function generateMetadata() {
//   const { title, content, settings } = await getData()

//   return {
//     title: `${settings?.site_name} | ${title}`,
//     description: content,
//   };
// }

export default async function Page() {

  const { title, hero, sections, content } = await getData()

  return (
    <main>
      <h1>{content.data?.title}</h1>
      <p>{content.data?.description}</p>
      {/* { title && <h1 className="sr-only">{ title }</h1> } */}
      {/* <Hero data={hero} /> */}
      {/* <Section items={sections} /> */}
    </main>
  )
}
