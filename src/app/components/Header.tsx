'use client'

import Image from 'next/image'
import ModalSearch from './ModalSearch'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from '../helpers/classNames'
import SettingsModel from '@sanity/models/SettingsModel'
import { urlForImage } from '@sanity/lib/image'
import { linkBuilder } from '@sanity/lib/link'
import { FaSearch } from 'react-icons/fa'

export type HeaderPropsType = {
  settings: SettingsModel
}

export default function Header({ settings }: HeaderPropsType) {
  const pathName = usePathname()
  const { siteSetting, routeSetting } = settings

  return (
    <>
      { pathName !== '/search' && <ModalSearch /> }
      <header className="header-area">
        <div className="main-header-area bg-black">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="alimeNav">
                { siteSetting?.logo &&
                <Link className="nav-brand py-2 h-100 d-block" href="/" aria-label="go home">
                  <Image src={ urlForImage(siteSetting.logo).size(256, 150).crop('center').toString() } height={30} width={100} alt={siteSetting.name} />
                </Link> }

                <div className="d-flex d-lg-none align-items-center">
                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                  </div>
                  { pathName !== '/search' && (
                    <div
                      className="search-icon ml-5 btn-modal"
                      data-toggle="modal"
                      data-target="#searchModal">
                        <FaSearch style={{fontSize: 22, cursor: 'pointer'}} />
                    </div>
                  ) }
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top bg-white"></span>
                      <span className="bottom bg-white"></span>
                    </div>
                  </div>
                  <div className="classynav">
                    <ul id="nav">
                      {
                        routeSetting?.menu?.map(item => {
                          const {isCurrentPage, uri, target} = linkBuilder(item, pathName || '')
                          return <li key={`menu-${item?._key}`}
                              className={classNames(
                                isCurrentPage ? "active" : ""
                              )}>
                            <Link href={ uri } target={target}>{ item.label }</Link>
                          </li>
                        })
                      }
                    </ul>

                    { pathName !== '/search' &&
                      <div className="search-icon d-none d-lg-inline ml-4 btn-modal" data-toggle="modal" data-target="#searchModal">
                        <FaSearch style={{fontSize: 22, cursor: 'pointer'}} />
                      </div>
                    }
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