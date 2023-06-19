import getSiteSettingsService from '@sanity/services/getSiteSettingService'
import { notFound } from 'next/navigation'
import 'src/app/helpers/toStringDate'
import { getContentsByCategorySlug } from '@services/getContentsByCategorySlug'
import Grid from '@app/components/Grid'
import { aligns } from '@sanity/schemas/variables/aligns'
import Banner from '@app/components/sections/Banner'

const getData = async (slug: string) => {
  const [
    siteSetting,
    contents
  ] = await Promise.all([
    getSiteSettingsService(),
    getContentsByCategorySlug(slug)
  ])

  return {
    contents,
    siteSetting,
  }
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { contents, siteSetting, } = await getData(params.slug)
  const title = contents?.[0]?.categories[0].title
  const description = contents?.[0]?.categories[0].description
  return {
    title: `${siteSetting.name} | ${title}`,
    description,
  };
}

export default async function Page({ params }: { params: { slug: string }}) {
  const { contents } = await getData(params.slug)

  if (!contents) {
    notFound()
  }

  const content = contents[0]

  const description = `${content._createdAt?.toStringDate()} - ${content.categories?.[0]?.title}`
  const bannerData = {
    title: content.title,
    description,
    image: content.image,
    align: aligns[0].value
  }

  return (
    <>
      <Banner data={bannerData} />
      <div className="container py-4">
        <h1 className="h2 my-5">{`Contents by category slug: ${params.slug}`}</h1>
        <Grid items={contents} isAjax={true}/>
      </div>
    </>
  );
}