import Hero from 'app/components/Hero'
import getPageBySlugService from 'app/services/getPageBySlugService'
import Section from 'app/components/Section'
import getSiteSettingsService from './services/getSiteSettingsService'
import { groq } from 'next-sanity'
import type { SanityDocument } from "@sanity/client";
import { client } from "@sanity/lib/client";
import { getPreviewToken } from '@sanity/lib/serverPreview'
import { notFound } from 'next/navigation'
import { PreviewSuspense } from '@components/PreviewSuspense'
import PreviewPage from '@components/PreviewPage'

const query = groq`*[_type == "flexibleContent" && defined(slug.current)][0]{
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
  const data: SanityDocument = await client.fetch(query, { caches: 'no-store' });

  return {
    hero: {},
    title: {},
    content: data,
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
  const token = getPreviewToken()

  const { title, hero, sections, content } = await getData()

  if (!content && !token) {
    notFound()
  }

  return token ? (
    <>
      <PreviewSuspense
        fallback="Loading..."
      >
        <main>
          {/* { title && <h1 className="sr-only">{ title }</h1> } */}
          {/* <Hero data={hero} /> */}
          {/* <Section items={sections} /> */}
          <PreviewPage query={query}/>
        </main>
      </PreviewSuspense>
    </>
  ) : (
    <main>
      <h1>{content?.title}</h1>
      <p>{content?.description}</p>
      {/* { title && <h1 className="sr-only">{ title }</h1> } */}
      {/* <Hero data={hero} /> */}
      {/* <Section items={sections} /> */}
    </main>
  );
}
