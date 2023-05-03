import './variable.css'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'
import getSiteSettingsService from './services/getSiteSettingsService'
import { writeFile} from 'fs'
import SectionHeading from './components/SectionHeading'
import Embed from './components/sections/Embed'

const getData = async () => {
  const {
    site_name,
    site_description,
    site_logo,
    social_networks,
    primary_color,
    instagram_embed_code
  } = await getSiteSettingsService()
  return {
    siteName: site_name,
    siteDescription: site_description,
    siteLogo: site_logo,
    socialNetworks: social_networks,
    primaryColor: primary_color,
    instagramEmbedCode: instagram_embed_code
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getData()
  const { primaryColor, instagramEmbedCode } = data
  // initThemeColor({ primaryColor })
  const embedData = {
    embed_code: instagramEmbedCode
  }

  return (
    <html lang="en">
      <body>
        <div id="preloader">
          <div className="loader"></div>
        </div>

        <Header {...data} />
          {children}

        <div className="container-fluid section-padding">
          <SectionHeading title="Follow our instagram" isCenter={true} />
          <Embed data={embedData}/>
        </div>
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