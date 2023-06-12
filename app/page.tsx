import { notFound } from 'next/navigation'
import Section from '@src/components/layouts/Section'
import getRouteSettingService from '@services/getRouteSettingService'
import getOneFlexibleService from '@services/getOneFlexibleService'
import getSiteSettingsService from '@services/getSiteSettingService'
import { getPreviewToken } from '@sanity/lib/serverPreview'
import { PreviewSuspense } from '@components/PreviewSuspense'
import PreviewPage from '@src/components/layouts/PreviewPage'
import Loading from './components/Loading'


const getData = async () => {
  const { homePage } = await getRouteSettingService()

  const [
    siteSetting,
    content
  ] = await Promise.all([
    getSiteSettingsService(),
    getOneFlexibleService(homePage.slug.current)
  ])

  return {
    content,
    siteSetting
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

  const { content } = await getData()

  if (!content && !token) {
    notFound()
  }

  return token ? (
    <>
      <PreviewSuspense
        fallback={<Loading />}
      >
          {/* <PreviewPage query={query}/> */}
      </PreviewSuspense>
    </>
  ) : (
    <div>
      { content?.title && <h1 className="sr-only">{ content?.title }</h1> }
      <Section sections={content.sections} />
    </div>
  );
}
