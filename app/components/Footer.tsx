import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@sanity/lib/image";
import IconBuilder from "@sanity/lib/icon";
import SettingsModel from "@sanity/models/SettingsModel";

export default function Footer({ settings }: { settings: SettingsModel }) {
  const { site, socialMedia } = settings

  const logo = urlForImage(site?.logo)

  return (
    <footer className="footer-area bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content d-flex align-items-center justify-content-between">
              <div className="copywrite-text">
                <p>{ site?.description }</p>
              </div>
              <div className="footer-logo">
                <a href="#">
                  <Image src={ logo.url() } height={100} width={100} alt={ site?.name } />
                </a>
              </div>
              <div className="social-info">
                { socialMedia?.socialItems?.map(item => {
                  const Icon = IconBuilder(item.icon.name)
                  return (
                  <Link
                    key={`sn-${item._key}`}
                    href={item.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize: '20px'}}
                    aria-label={`go to ${item.name}'s ${item.name}`}>
                    <Icon />
                  </Link>)
              }) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}