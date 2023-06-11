import Link from "next/link";
import getSiteSettingsService from "../sanity/services/getSiteSettingService";

export async function generateMetadata() {
  const settings = await getSiteSettingsService()

  return {
    title: `${settings?.site_name} | 404`,
    description: "page not found.",
  };
}

export default function PageNotFound() {
  return (
    <>
      <div className="container py-5 bg-grey">
        <div className="text-center section-padding">
          <div className="inner-content">
            <h1 className="heading">404</h1>
            <p>page not found.</p>
            <Link href="/" className="btn alime-btn mt-4" style={{ color: '#333'}}>Go Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}