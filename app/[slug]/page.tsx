import Hero from 'app/components/Hero'
import getPageBySlugService from 'app/services/getPageBySlugService'
import Section from 'app/components/Section'
import getSiteSettingsService from 'app/services/getSiteSettingsService'
import { notFound } from 'next/navigation'

import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "@sanity/lib/client";

const query = groq`*[_type == "flexiblePages" && slug.current == $slug][0]{
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

    const page = await client.fetch(query, queryParams);
    console.log(page, queryParams);
  
    return {
      hero: {},
      title: {},
      content: {
        data: page
      },
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

  return (
    <main>
            <h1>{content.data?.title}</h1>
      <p>{content.data?.description}</p>
      {/* { title && <h1 className="sr-only">{ title }</h1> } */}
      {/* <Hero data={hero} />
      <Section items={sections} /> */}
    </main>
  )
}
