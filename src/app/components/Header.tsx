'use client'

import Image from 'next/image'
import ModalSearch from './ModalSearch'
import { SettingsPropsType } from '../types/SettingsPropsType'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from '../helpers/classNames'

export type HeaderPropsType = SettingsPropsType & {
  menus: any[]
}

export default function Header({ site_name, site_logo, menus }: HeaderPropsType) {
  const pathName = usePathname()

  return (
    <>
      { pathName !== '/search' && <ModalSearch /> }
      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="alimeNav">

                <Link className="nav-brand" href="/" aria-label="go home">
                  <Image src={ site_logo?.[0]?.url } height={30} width={100} alt={site_name} />
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
                      {
                        menus?.map(item => (
                          <li key={`menu-${item.id}`}
                              className={classNames(
                                pathName.replace('/', '') === item.slug ? "active" : ""
                              )}>
                            <Link href={ item?.slug }>{ item?.title }</Link>
                          </li>
                        ))
                      }
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