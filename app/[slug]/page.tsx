import getPageBySlugService from '@sanity/services/getOneFlexibleService'
import Section from '@src/components/layouts/Section'
import getSiteSettingsService from '@sanity/services/getSiteSettingService'
import { notFound } from 'next/navigation'

import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "@sanity/lib/client";

import { getPreviewToken } from '@sanity/lib/serverPreview'
import { PreviewSuspense } from '@components/PreviewSuspense'
import PreviewPage from '@src/components/layouts/PreviewPage'

const query = groq`*[_type == "flexibleContent" && slug.current == $slug][0]{
  _id,
  title,
  description
}`;

const getData = async (slug: string) => {
  try {
    // const data = await getPageBySlugService(slug)
    // const { sections, title, content, hero, createdAt } = data
  
    // if (hero.__component === 'single-image') {
    //   hero.date = new Date(createdAt).toLocaleDateString()
    // }
    const queryParams = { slug };

    const content = await client.fetch(query, queryParams);
  
    return {
      hero: {},
      title: {},
      content,
      sections: {}
    } 
  } catch(err) {
    notFound()
  }
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  // const settings = await getSiteSettingsService()
  // const { title, content } = await getData(params.slug)

  // return {
  //   title: `${settings.site_name} | ${title}`,
  //   description: content,
  // };
}

export default async function Page({ params }: { params: { slug: string }}) {
  const { title, hero, sections, content } = await getData(params.slug)
  const token = getPreviewToken()

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
          <PreviewPage query={query} params={params} />
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
