import { urlForImage } from "@sanity/lib/image";
import classNames from "@src/helpers/classNames";
import Image from "next/image";
import Link from "next/link";

export default function Card({ data }: any) {
  const { _key, title, description, image, slug, delay } = data
  return (
    <div
      className="single_gallery_item wow fadeInUp"
      data-wow-delay={`${delay}ms`}>
      <Link
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
      </Link>
      <div className="mt-3">
        { title && <Link href={slug}>
          <h3 className="h3">{title}</h3></Link> }
        { description && <p className="mb-0">{description}</p> }
      </div>
    </div>
  )
}