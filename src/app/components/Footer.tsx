import Image from "next/image";
import { SettingsPropsType } from "../types/SettingsPropsType";
import Link from "next/link";

export type FooterPropsType = SettingsPropsType & {

}

export default function Footer({
    siteLogo,
    siteName,
    siteDescription,
    socialNetworks 
  }: FooterPropsType) {

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content d-flex align-items-center justify-content-between">
              <div className="copywrite-text">
                <p>{ siteDescription }</p>
              </div>
              <div className="footer-logo">
                <a href="#">
                  <Image src={ siteLogo?.[0]?.url } height={30} width={100} alt={ siteName } />
                </a>
              </div>
              <div className="social-info">
                { socialNetworks?.map(item => (
                  <Link key={`sn-${item.id}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`go to ${item.name}`}>
                    <i className={item.icon_class_name} aria-hidden="true"></i>
                  </Link>
                )) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}