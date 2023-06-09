import './variable.css'
import './style.css'
import Header from './components/Header'
import Footer, { FooterData } from './components/Footer'
import Script from 'next/script'
import getSiteSettingsService from './services/getSiteSettingsService'
import { writeFile} from 'fs'
import SectionHeading from './components/SectionHeading'
import Embed from './components/sections/Embed'
import Loading from './components/Loading'


const getData = async () => {
  const site = await getSiteSettingsService()

  return {
    site
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { site } = await getData()
  // const { primary_color, instagram_embed_code } = data
  // initThemeColor({ primaryColor })
  const footerData: FooterData = {
    site
  }
  return (
    <html lang="en">
      <body>
        <Loading />

        {/* <Header {...data} /> */}
          {children}

          {/* { instagram_embed_code && <div className="container-fluid py-4" style={{ background: '#9ca0ac' }}>
            <Embed data={{ embed_code: instagram_embed_code }}/>
          </div> } */}
        <Footer data={footerData} />

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