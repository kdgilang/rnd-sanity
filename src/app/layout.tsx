import './variable.css'
import './style.css'
import Header from 'src/app/components/Header'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import { writeFile} from 'fs'
import Loading from 'src/app/components/Loading'
import getNetworkSettingService from '@services/getNetworkSettingService'
import getRouteSettingService from '@services/getRouteSettingService'
import getSiteSettingService from '@services/getSiteSettingService'

const getData = async () => {
  const [
    siteSetting,
    routeSetting,
    networkSetting
  ] = await Promise.all([
    getSiteSettingService(),
    getRouteSettingService(),
    getNetworkSettingService(),
  ])

  return {
    siteSetting,
    routeSetting,
    networkSetting
  }
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    siteSetting,
    routeSetting,
    networkSetting
   } = await getData()

  // const { primary_color, instagram_embed_code } = data
  // initThemeColor({ primaryColor })

  const settings = {
    siteSetting,
    networkSetting,
    routeSetting
  }

  return (
    <html lang="en">
      <body>
        <Loading />

        <Header settings={settings} />
          <main style={{ marginTop: 70 }}>
            {children}
          </main>
        <Footer settings={settings} />

        <Script src="/js/jquery.min.js" defer />

        <Script src="/js/alime.bundle.js" defer />

        <Script strategy="lazyOnload" src="/js/default-assets/active.js" async />
      </body>
    </html>
  )
}

type ColorsType = {
  primaryColor: string
}

const initThemeColor = ({ primaryColor }: ColorsType) => {
  const data = `
  :root {
    --primary-color: ${primaryColor};
  }
  `
  writeFile(`./app/variable.css`, data, () => {})
}