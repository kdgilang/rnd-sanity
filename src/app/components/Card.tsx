import IconBuilder from "@sanity/lib/icon";
import { urlForImage } from "@sanity/lib/image";
import classNames from "src/app/helpers/classNames";
import { BasePropsType } from "src/app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";

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
    description
  } = data

  let Icon: any = null
  if (icon?.name) {
    Icon = IconBuilder(icon.name);
  }

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
      { image && <Link
        href={urlForImage(image).url()}
        className={classNames(
          "portfolio-img",
        )}>
        <div className="single-portfolio-content">
          <Image src={urlForImage(image).size(640, 480).url()} width={200} height={150} alt={title} />
          <div className="hover-content">
            <div> + </div>
          </div>
        </div>
      </Link> }
      { Icon && <span className="choose-us-icon">
        <Icon style={{ fontSize: 30 }} />
      </span> }
      { (title || description) && <div className="mt-3">
        { title && (<Link href={slug}>
          <h3 className="h3">{title}</h3></Link>) }
        { description && <p className="mb-0">{description}</p> }
      </div> }
    </div>
  )
}