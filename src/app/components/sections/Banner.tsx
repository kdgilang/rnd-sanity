import { urlForImage } from "@sanity/lib/image"
import { linkBuilder } from "@sanity/lib/link"
import classNames from "src/app/helpers/classNames"
import { BasePropsType } from "src/app/types/BasePropsType"
import Link from "next/link"

export type ImagePropsType = BasePropsType & {
  data: any
}

export default function Banner({ data, className }: ImagePropsType) {
  const { image, title, description, align, link } = data
  const { uri, target } = linkBuilder(link)

  return (
    <div className={classNames(
      "breadcrumb-area bg-img bg-overlay jarallax",
      className || ""
    )}
    style={{backgroundImage: `url(${urlForImage(image).url()})`}}>
      <div className="container h-100">
        <div className={
          classNames(
            align,
            "row h-100 align-items-center"
          )
        }>
          <div className="col-xs-12 col-md-7 col-lg-6">
            <h2 className="text-primary text-capitalize wow fadeInUp" data-wow-delay="100ms">{ title }</h2>
            <p className="text-white wow fadeInUp" data-wow-delay="300ms">{ description }</p>
            { uri && <div className="hero-btn-group wow fadeInDown" data-wow-delay="500ms">
              <Link href={uri} target={target} className="btn alime-btn mt-3">{link.label}</Link>
            </div> }
          </div>
        </div>
      </div>
    </div>
  )
}