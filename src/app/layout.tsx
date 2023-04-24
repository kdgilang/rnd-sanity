import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'
import getSiteSettingsService from './services/getSiteSettingsService'

const getData = async () => {
  const {site_name, site_description, site_logo} = await getSiteSettingsService()
  return {
    siteName: site_name,
    siteDescription: site_description,
    siteLogo: site_logo 
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getData()

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
