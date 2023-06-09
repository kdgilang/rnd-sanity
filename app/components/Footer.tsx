import Image from "next/image";
import Link from "next/link";
import SisteSettingModel from "@sanity/models/SiteSettingModel";
import { urlForImage } from "@sanity/lib/image";

export type FooterData = {
  site: SisteSettingModel
}

export default function Footer({ data }: { data: FooterData }) {
  const { site } = data

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
                {/* { social_networks?.map(item => (
                  <Link key={`sn-${item.id}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`go to ${item.name}`}>
                    <i className={item.icon_class_name} aria-hidden="true"></i>
                  </Link>
                )) } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}