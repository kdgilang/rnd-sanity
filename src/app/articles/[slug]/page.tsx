import getSiteSettingsService from '@sanity/services/getSiteSettingService'
import { notFound } from 'next/navigation'
import { getPreviewToken } from '@sanity/lib/serverPreview'
import Banner from 'src/app/components/sections/Banner'
import { getArticleBySlugService } from '@services/getArticleBySlugService'
import { aligns } from '@sanity/schemas/variables/aligns'
import 'src/app/helpers/toStringDate'
import PortableBlock from "src/app/components/PortableBlock";
import PreviewArticle from '@app/components/layouts/PreviewArticle'

const getData = async (slug: string) => {
  const [
    siteSetting,
    content
  ] = await Promise.all([
    getSiteSettingsService(),
    getArticleBySlugService(slug)
  ])

  return {
    content,
    siteSetting,
  }
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { content, siteSetting, } = await getData(params.slug)

  return {
    title: `${siteSetting.name} | ${content.title}`,
    description: content,
  };
}

export default async function Page({ params }: { params: { slug: string }}) {
  const token = getPreviewToken()
  const { content } = await getData(params.slug)

  if (!content && !token) {
    notFound()
  }

  const bannerData = {
    title: content.title,
    description: content._createdAt?.toStringDate(),
    image: content.image,
    align: aligns[0].value
  }

  return token ? (
    <PreviewArticle params={params} />
  ) : (
    <>
      <Banner data={bannerData} />
      <div className="container blog-details-text">
        <div className="alert alert-secondary my-5" role="alert">
          { content.description }
        </div>
        <div className="my-5">
          <PortableBlock value={content.body} />
        </div>
      </div>
    </>
  );
}