import Image from "next/image";
import { SettingsPropsType } from "../types/SettingsPropsType";
import Link from "next/link";

export type FooterPropsType = SettingsPropsType & {

}

export default function Footer({
    site_ogo,
    site_name,
    site_description,
    social_networks 
  }: FooterPropsType) {

  return (
    <footer className="footer-area bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content d-flex align-items-center justify-content-between">
              <div className="copywrite-text">
                <p>{ site_description }</p>
              </div>
              <div className="footer-logo">
                <a href="#">
                  <Image src={ site_ogo?.[0]?.url } height={30} width={100} alt={ site_name } />
                </a>
              </div>
              <div className="social-info">
                { social_networks?.map(item => (
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