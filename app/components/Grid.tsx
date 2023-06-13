'use client'

import { urlForImage } from "@sanity/lib/image";
import classNames from "app/helpers/classNames";
// import getcardsService from "@sanity/services/getcardsService";
import { BasePropsType } from "app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type GridPropsType = BasePropsType & {
  isAjax?: boolean
  data: any[]
}

export default function Grid({ data, className, isAjax }: GridPropsType) {
  let delay = 0

  const loadPerPage = 10

  const [categories, setCategories] = useState<any[]>([])

  const [cards, setCards] = useState(data)

  const [isFullyLoaded, setIsFullyLoaded] = useState(false)

  const [cardsLength, setCardsLength] = useState(0)

  const [isBusy, setIsBusy] = useState(false)

  useEffect(() => {
    setCategories(() => 
      cards?.map((item: any) => 
        item.categories?.map((cat: any) => cat)
      ).flat()
    )
  }, [cards])

  useEffect(() => {
    if (cardsLength === cards?.length || cardsLength < loadPerPage) {
      setIsFullyLoaded(true)
    }
  }, [cards, cardsLength])

  const handleLoadMore = async () => {
    if (isBusy) return
    setIsBusy(true)
    // const data = await getcardsService(10)
    if (data) {
      setCardsLength(data?.length)
      const slicescards = data?.slice(cards?.length, data?.length)

      setCards((prevcards: any) => [
        ...prevcards,
        ...slicescards
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
                <button
                  key={`cat-${item._id}`}
                  className="btn text-capitalize"
                  data-filter={`.${item?.slug.current?.toLowerCase()}`}
                >{ item.menuName }</button>
              ))}
            </div>
          </div>
        </div>
      </div> }

      <div className={classNames(
        "row",
        isAjax ? "" : "alime-portfolio"
      )}>
        { cards?.map((item: any, i: number) => {
          delay = i * 150

          let slugs = [];

          if (!isAjax) {
            slugs = item?.categories?.map((c: any) => c.slug?.current?.toLowerCase())
          }

          return <Link
            key={`grid-${item._id}`}
            href={isAjax ? `/cards/${item.slug.current}`: urlForImage(item.image).url()}
            className={classNames(
              "col-12 col-sm-6 col-lg-3 alime-portfolio__item mb-3 px-2 wow fadeInUp",
              isAjax ?  "" : `${slugs?.join(',')} portfolio-img`
            )}
            data-wow-delay={`${delay}ms`}>
            <div className="single-portfolio-content">
              <Image src={urlForImage(item.image).size(680, 480).url()} width={680} height={480} alt={item.title} />
              <div className="hover-content">
                <div>
                  { isAjax ? <span className="fa fa-link"></span> : '+' }
                </div>
              </div>
            </div>
          </Link>
        })}
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center wow fadeInUp" data-wow-delay={`${delay + 200}ms`}>
          { isBusy && <div className="loader mx-auto mb-4 wow fadeIn"></div> }
          { isAjax ? (!isFullyLoaded && <button className="btn alime-btn btn-2 mt-15" onClick={handleLoadMore}>Load More</button>) :
            <Link href="/cards" className="btn alime-btn btn-2 mt-15">View More</Link>
          }
        </div>
      </div>
    </div>
  )
}