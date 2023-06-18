import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@sanity/lib/image";
import IconBuilder from "@sanity/lib/icon";
import SettingsModel from "@sanity/models/SettingsModel";

export default function Footer({ settings }: { settings: SettingsModel }) {
  const { siteSetting, networkSetting } = settings

  const logo = urlForImage(siteSetting?.logo)

  return (
    <footer className="footer-area bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content d-flex align-items-center justify-content-between">
              <div className="copywrite-text">
                <p>{ siteSetting?.description }</p>
              </div>
              <div className="footer-logo">
                { siteSetting?.logo && <Link href="/" aria-label="Go home">
                  <Image src={ urlForImage(siteSetting.logo).size(256, 150).crop('center').url() } height={100} width={100} alt={ siteSetting?.name } />
                </Link> }
              </div>
              <div className="social-info">
                { networkSetting?.networkItems?.map(item => {
                  const Icon = IconBuilder(item.icon.name)
                  return (
                  <Link
                    key={`sn-${item._key}`}
                    href={item.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize: 24}}
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