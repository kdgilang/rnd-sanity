import Image from "next/image";
import { SettingsPropsType } from "../types/SettingsPropsType";

export type FooterPropsType = SettingsPropsType & {

}

export default function Footer({ siteLogo, siteName, siteDescription }: FooterPropsType) {

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
                <a href="#"><i className="ti-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="ti-twitter-alt" aria-hidden="true"></i></a>
                <a href="#"><i className="ti-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="ti-pinterest" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}