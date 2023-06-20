'use client'

import IconBuilder from "@sanity/lib/icon";
import { urlForImage } from "@sanity/lib/image";
import classNames from "src/app/helpers/classNames";
import { BasePropsType } from "src/app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";
import { internalLinkBuilder } from "@sanity/lib/link";
import { useEffect } from "react";

export type CardPropsType = BasePropsType & {
  data: any
}

export default function Card({ data, className }: CardPropsType) {
  const {
    _type,
    icon,
    slug,
    delay,
    image,
    title,
    categories,
    description,
  } = data

  useEffect(() => {
    //@ts-ignore
    if (typeof $ !== 'undefined') {
       //@ts-ignore
      $('.portfolio-img').magnificPopup({
        type: 'image',
        midClick: true,
        gallery: {
            enabled: true,
            preload: [0, 2],
            navigateByImgClick: true,
            tPrev: 'Previous',
            tNext: 'Next'
        }
      });
    }
  },[data])

  let Icon: any = null
  
  if (icon?.name) {
    Icon = IconBuilder(icon.name);
  }

  const category = categories?.[0]

  return (
    <div
      className={classNames(
        _type,
        "why-choose-us-content wow fadeInUp",
        Icon ? "text-center" : "",
        (title || description) ? "with-text" : "no-text",
        className || ""
      )}
      data-wow-delay={`${delay}ms`}>
     
      <div className="single-portfolio-content">
        { category && <Link
          href={internalLinkBuilder(category.slug.current, category._type)}
          className="category py-1 px-2 position-absolute bg-primary end-0">
          { category.title }
        </Link> }
        { image?._id && <Link
          href={urlForImage(image).toString()}
          className="portfolio-img">
            <Image src={urlForImage(image).size(640, 480).toString()} width={200} height={150} alt={title} />
            <div className="hover-content">
              <div> + </div>
            </div>
        </Link> }
      </div>
      { Icon && <span className="choose-us-icon">
        <Icon style={{ fontSize: 30 }} />
      </span> }
      { (title || description) && <div className="mt-3">
        <div>
          <Link href={internalLinkBuilder(slug?.current, _type)}>
            <h3 className="h3 text-truncate">{title}</h3>
            { description && <p className="mb-0">{description}</p> }
          </Link>
        </div>
      </div> }
    </div>
  )
}