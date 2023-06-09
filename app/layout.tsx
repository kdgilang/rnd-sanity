import './variable.css'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'
import getSiteSettingService from './services/getSiteSettingService'
import { writeFile} from 'fs'
import SectionHeading from './components/SectionHeading'
import Embed from './components/sections/Embed'
import Loading from './components/Loading'
import getSocialMediaSettingService from './services/getSocialMediaSettingService'


const getData = async () => {
  const [site, socialMedia] = await Promise.all([
    getSiteSettingService(),
    getSocialMediaSettingService()
  ])

  return {
    site,
    socialMedia
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { site, socialMedia } = await getData()
  // const { primary_color, instagram_embed_code } = data
  // initThemeColor({ primaryColor })

  const settings = {
    site,
    socialMedia
  }

  return (
    <html lang="en">
      <body>
        <Loading />

        <Header settings={settings} />
          {children}

          {/* { instagram_embed_code && <div className="container-fluid py-4" style={{ background: '#9ca0ac' }}>
            <Embed data={{ embed_code: instagram_embed_code }}/>
          </div> } */}
        <Footer settings={settings} />

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