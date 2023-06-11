import Hero from 'app/components/Hero'
import getPageBySlugService from '@sanity/services/getOneFlexibleService'
import Section from 'app/components/Section'
import getSiteSettingsService from '../sanity/services/getSiteSettingService'
import { getPreviewToken } from '@sanity/lib/serverPreview'
import { notFound } from 'next/navigation'
import { PreviewSuspense } from '@components/PreviewSuspense'
import PreviewPage from '@components/PreviewPage'
import getRouteSettingService from '../sanity/services/getRouteSettingService'
import getOneFlexibleService from '@sanity/services/getOneFlexibleService'
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
      {/* <h1>{content?.title}</h1>
      <p>{content?.description}</p> */}
      { content?.title && <h1 className="sr-only">{ content?.title }</h1> }
      <Section sections={content.sections} />
    </div>
  );
}
