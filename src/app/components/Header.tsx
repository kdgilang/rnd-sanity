import Image from 'next/image'
import ModalSearch from './ModalSearch'
import { SettingsPropsType } from '../types/SettingsPropsType'
import Link from 'next/link'

export type HeaderPropsType = SettingsPropsType & {

}

export default function Header({ siteName, siteLogo }: HeaderPropsType) {
  return (
    <>
      <ModalSearch />
      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="alimeNav">

                <Link className="nav-brand" href="/" aria-label="go home">
                  <Image src={ siteLogo?.[0]?.url } height={30} width={100} alt={siteName} />
                </Link>

                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                  </div>
                  <div className="classynav">
                    <ul id="nav">
                      <li className="active"><a href="./index.html">Home</a></li>
                      <li><a href="#">Pages</a>
                        <ul className="dropdown">
                          <li><a href="./index.html">- Home</a></li>
                          <li><a href="./about.html">- About</a></li>
                          <li><a href="./gallery.html">- Gallery</a></li>
                          <li><a href="./blog.html">- Blog</a></li>
                          <li><a href="./single-blog.html">- Blog Details</a></li>
                          <li><a href="./contact.html">- Contact</a></li>
                          <li><a href="#">- Dropdown</a>
                            <ul className="dropdown">
                              <li><a href="#">- Dropdown Item</a></li>
                              <li><a href="#">- Dropdown Item</a></li>
                              <li><a href="#">- Dropdown Item</a></li>
                              <li><a href="#">- Dropdown Item</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="./about.html">About</a></li>
                      <li><a href="./gallery.html">Gallery</a></li>
                      <li><a href="./blog.html">Blog</a></li>
                      <li><a href="./contact.html">Contact</a></li>
                    </ul>

                    <div className="search-icon" data-toggle="modal" data-target="#searchModal"><i className="fa fa-search"></i></div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}