'use client'

import classNames from "@src/app/helpers/classNames";
import getGalleriesService from "@src/app/services/getGalleriesService";
import { BaseDataType, BasePropsType } from "@src/app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type GalleryDataType = BaseDataType & {
  galleries: any[]
}

export type GalleryPropsType = BasePropsType & {
  isAjax?: boolean
  data: GalleryDataType
}

export default function Gallery({ data, className, isAjax }: GalleryPropsType) {
  let delay = 0

  const [categories, setCategories] = useState<any[]>([])

  const [galleries, setGalleries] = useState(data?.galleries)

  useEffect(() => {
    galleries?.forEach(item => {
      setCategories([...item.categories?.map((cat: any) => cat)])
    })
  }, [galleries])

  const handleLoadMore = async () => {
    const data = await getGalleriesService(2)

    if (data?.galleries) {
      setGalleries([])

      setTimeout(() => {
        setGalleries(data.galleries)
      }, 200);
    }
  }

  return (
    <div className={classNames(
      className || ""
    )}>
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
      </div>

      <div className="row alime-portfolio">
        {galleries?.map((item, i) => {
          delay = i * 150
          let slugs = item?.categories?.map((c: any) => c.slug.toLowerCase())
          return <div
            key={`gallery-${item.id}`}
            className={classNames(
              "col-12 col-sm-6 col-lg-3 single_gallery_item mb-30 wow fadeInUp",
              slugs?.join(',')
            )}
            data-wow-delay={`${delay}ms`}>
            <div className="single-portfolio-content">
              <Image src={item?.images?.[0]?.formats?.medium?.url} width={200} height={100} alt={item.title} />
              <div className="hover-content">
                <a href={item?.images?.[0]?.url} className="portfolio-img">+</a>
              </div>
            </div>
          </div>
        })}
      </div>

      <div className="row">
        <div className="col-12 text-center wow fadeInUp" data-wow-delay={`${delay + 200}ms`}>
          { isAjax ? <a href="#" className="btn alime-btn btn-2 mt-15" onClick={handleLoadMore}>Load More</a> :
            <Link href="/gallery" className="btn alime-btn btn-2 mt-15">View More</Link>
          }
        </div>
      </div>
    </div>
  )
}