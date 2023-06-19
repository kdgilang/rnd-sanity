'use client'

import { linkBuilder } from "@sanity/lib/link";
import { BaseContentModel } from "@sanity/models/BaseModel";
import LinkModel from "@sanity/models/LinkModel";
import classNames from "src/app/helpers/classNames";
import { BasePropsType } from "src/app/types/BasePropsType";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./Card";

export type GridPropsType = BasePropsType & {
  isAjax?: boolean
  items: BaseContentModel[]
  link?: LinkModel
}

export default function Grid({ items, className, isAjax, link }: GridPropsType) {

  const { uri, target } = linkBuilder(link)
  
  let delay = 0

  const [categories, setCategories] = useState<any[]>([])

  const [cards, setCards] = useState(items)

  useEffect(() => {
    setCards(items)

    setCategories(() => 
      items?.map(item => 
        item.categories?.map((cat: any) => cat)
      ).flat()
    )
  }, [items])

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
                >{ item.title }</button>
              ))}
            </div>
          </div>
        </div>
      </div> }

      <div className={classNames(
        "alime-portfolio row"
      )}>
        { cards?.map((item: any, i: number) => {
          item.delay = (i+1) * 180

          let slugs = [];

          if (!isAjax) {
            slugs = item?.categories?.map((c: any) => c.slug?.current?.toLowerCase())
            item.title = item.description = ''
          }

          return <div
            key={`grid-${item._id}`}
            className={classNames(
              isAjax ?  "" : `${slugs?.join(',')}`,
              "col-12 col-sm-6 col-lg-3 alime-portfolio__item mb-3 px-md-2 invisible",
            )}>
              <Card data={item} />
            </div>
        })}
      </div>

      { uri && <div className="row mt-4">
        <div className="col-12 text-center wow fadeInUp" data-wow-delay={`${delay + 200}ms`}>
          <Link href={uri} target={target} className="btn alime-btn btn-2 mt-15">{link?.label}</Link>
        </div>
      </div> }
    </div>
  )
}