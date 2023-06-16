import { notFound } from 'next/navigation'
import Section from 'src/app/components/layouts/Section'
import getRouteSettingService from '@services/getRouteSettingService'
import { getFlexibleBySlugService } from '@services/getFlexibleBySlugService'
import getSiteSettingsService from '@services/getSiteSettingService'
import { getPreviewToken } from '@sanity/lib/serverPreview'
import PreviewFlexible from 'src/app/components/layouts/PreviewFlexible'

const getData = async () => {
  const { homePage } = await getRouteSettingService()

  const [
    siteSetting,
    content
  ] = await Promise.all([
    getSiteSettingsService(),
    getFlexibleBySlugService(homePage.slug.current)
  ])

  return {
    content,
    homePage,
    siteSetting,
  }
}

export async function generateMetadata() {
  const { content, siteSetting } = await getData()

  return {
    title: `${siteSetting?.name} | ${content.title}`,
    description: content.description,
  };
}

export default async function Page() {
  const token = getPreviewToken()

  const { content, homePage } = await getData()

  if (!content && !token) {
    notFound()
  }

  return token ? (
    <PreviewFlexible params={{ slug: homePage.slug.current }} />
  ) : (
    <>
      { content?.title && <h1 className="sr-only">{ content?.title }</h1> }
      <Section sections={content.sections} />
    </>
  );
}
