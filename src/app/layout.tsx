import './variable.css'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'
import getSiteSettingsService from './services/getSiteSettingsService'
import { writeFile} from 'fs'

const getData = async () => {
  const {
    site_name,
    site_description,
    site_logo,
    social_networks,
    primary_color
  } = await getSiteSettingsService()
  return {
    siteName: site_name,
    siteDescription: site_description,
    siteLogo: site_logo,
    socialNetworks: social_networks,
    primaryColor: primary_color
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getData()
  const { primaryColor } = data
  // initThemeColor({ primaryColor })

  return (
    <html lang="en">
      <body>
        <div id="preloader">
          <div className="loader"></div>
        </div>

        <Header {...data} />
          {children}
        <Footer {...data} />

        <Script src="/js/jquery.min.js"  />

        <Script src="/js/popper.min.js"  />

        <Script src="/js/bootstrap.min.js"  />

        <Script src="/js/alime.bundle.js"  />

        <Script src="/js/default-assets/active.js"  />
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
  writeFile(`./src/app/variable.css`, data, () => {})
}