import IconBuilder from "@sanity/lib/icon";
import { urlForImage } from "@sanity/lib/image";
import classNames from "@src/helpers/classNames";
import Image from "next/image";
import Link from "next/link";

export default function Card({ data }: any) {
  const {
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
        "single_gallery_item wow fadeInUp",
        Icon ? "text-center" : ""
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
      { Icon && <span className="">
        <Icon style={{ fontSize: 30 }} />
      </span> }
      <div className="mt-3">
        { title && <Link href={slug} >
          <h3 className="h3">{title}</h3></Link> }
        { description && <p className="mb-0">{description}</p> }
      </div>
    </div>
  )
}