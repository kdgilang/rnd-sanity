import {getFlexibleBySlugService} from '@services/getFlexibleBySlugService'
import Section from 'src/app/components/layouts/Section'
import getSiteSettingsService from '@sanity/services/getSiteSettingService'
import { notFound } from 'next/navigation'
import { getPreviewToken } from '@sanity/lib/serverPreview'
import PreviewFlexible from 'src/app/components/layouts/PreviewFlexible'

const getData = async (slug: string) => {
  const [
    siteSetting,
    content
  ] = await Promise.all([
    getSiteSettingsService(),
    getFlexibleBySlugService(slug)
  ])

  return {
    content,
    siteSetting,
  }
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { content, siteSetting, } = await getData(params.slug)

  return {
    title: `${siteSetting?.name} | ${content?.title}`,
    description: content?.description,
  };
}

export default async function Page({ params }: { params: { slug: string }}) {
  const token = getPreviewToken()
  const { content } = await getData(params.slug)

  if (!content && !token) {
    notFound()
  }

  return token ? (
    <PreviewFlexible params={params} />
  ) : (
    <>
      { content?.title && <h1 className="sr-only">{ content?.title }</h1> }
      <Section sections={content.sections} />
    </>
  );
}
