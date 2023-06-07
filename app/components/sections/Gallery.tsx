'use client'

import classNames from "app/helpers/classNames";
import getGalleriesService from "app/services/getGalleriesService";
import { BaseDataType, BasePropsType } from "app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type GalleryDataType = BaseDataType & {
  galleries: any[]
}

export type GalleryPropsType = BasePropsType & {
  isAjax?: boolean
  data: GalleryDataType
}

export default function Gallery({ data, className, isAjax }: GalleryPropsType) {
  let delay = 0

  const loadPerPage = 10

  const [categories, setCategories] = useState<any[]>([])

  const [galleries, setGalleries] = useState(data?.galleries)

  const [isFullyLoaded, setIsFullyLoaded] = useState(false)

  const [galleriesLength, setGalleriesLength] = useState(0)

  const [isBusy, setIsBusy] = useState(false)

  useEffect(() => {
    setCategories(() => 
      galleries?.map(item => 
        item.categories?.map((cat: any) => cat)
      ).flat()
    )
  }, [galleries])

  useEffect(() => {
    if (galleriesLength === galleries?.length || galleriesLength < loadPerPage) {
      setIsFullyLoaded(true)
    }
  }, [galleries, galleriesLength])

  const handleLoadMore = async () => {
    if (isBusy) return
    setIsBusy(true)
    const data = await getGalleriesService(10)
    if (data?.galleries) {
      setGalleriesLength(data.galleries?.length)
      const slicesGalleries = data?.galleries?.slice(galleries?.length, data.galleries?.length)

      setGalleries(prevGalleries => [
        ...prevGalleries,
        ...slicesGalleries
      ])
    }
    setIsBusy(false)
  }

  return (
    <div className={classNames(
      className || ""
    )}>
      {!isAjax &&
      <div className="row">
        <div className="col-12">
          <div className="alime-projects-menu">
            <div className="portfolio-menu text-center">
              <button className="btn active" data-filter="*">All</button>
              { categories?.map((item: any) => (
                <button key={`cat-${item.id}`} className="btn" data-filter={`.${item?.slug?.toLowerCase()}`}>{ item.title }</button>
              ))}
            </div>
          </div>
        </div>
      </div> }

      <div className={classNames(
        "row",
        isAjax ? "" : "alime-portfolio"
      )}>
        { galleries?.map((item, i) => {
          delay = i * 150

          let slugs = [];

          if (!isAjax) {
            slugs = item?.categories?.map((c: any) => c.slug.toLowerCase())
          }

          return <Link
            key={`gallery-${item.id}`}
            href={isAjax ? `/galleries/${item.slug}`: item?.images?.[0]?.url}
            className={classNames(
              "col-12 col-sm-6 col-lg-3 single_gallery_item mb-30 wow fadeInUp",
              isAjax ?  "" : `${slugs?.join(',')} portfolio-img`
            )}
            data-wow-delay={`${delay}ms`}>
            <div className="single-portfolio-content">
              <Image src={item?.images?.[0]?.formats?.thumbnail?.url} width={200} height={100} alt={item.title} />
              <div className="hover-content">
                <div>
                  { isAjax ? <span className="fa fa-link"></span> : '+' }
                </div>
              </div>
            </div>
          </Link>
        })}
      </div>

      <div className="row">
        <div className="col-12 text-center wow fadeInUp" data-wow-delay={`${delay + 200}ms`}>
          { isBusy && <div className="loader mx-auto mb-4 wow fadeIn"></div> }
          { isAjax ? (!isFullyLoaded && <button className="btn alime-btn btn-2 mt-15" onClick={handleLoadMore}>Load More</button>) :
            <Link href="/galleries" className="btn alime-btn btn-2 mt-15">View More</Link>
          }
        </div>
      </div>
    </div>
  )
}