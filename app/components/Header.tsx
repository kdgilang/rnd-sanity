'use client'

import Image from 'next/image'
import ModalSearch from './ModalSearch'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from '../helpers/classNames'
import SettingsModel from '@sanity/models/SettingsModel'
import { urlForImage } from '@sanity/lib/image'

export type HeaderPropsType = {
  settings: SettingsModel
}

export default function Header({ settings }: HeaderPropsType) {
  const pathName = usePathname()
  const { site } = settings

  return (
    <>
      { pathName !== '/search' && <ModalSearch /> }
      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="alimeNav">

                <Link className="nav-brand" href="/" aria-label="go home">
                  <Image src={ urlForImage(site.logo).url() } height={30} width={100} alt={site.name} />
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
                      {/* {
                        menus?.map(item => (
                          <li key={`menu-${item.id}`}
                              className={classNames(
                                pathName.replace('/', '') === item.slug ? "active" : ""
                              )}>
                            <Link href={ item?.slug }>{ item?.title }</Link>
                          </li>
                        ))
                      } */}
                    </ul>

                    { pathName !== '/search' && <div className="search-icon" data-toggle="modal" data-target="#searchModal"><i className="fa fa-search"></i></div> }
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