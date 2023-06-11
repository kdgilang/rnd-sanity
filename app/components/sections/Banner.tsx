import { urlForImage } from "@sanity/lib/image"
import classNames from "app/helpers/classNames"
import { BaseDataType, BasePropsType } from "app/types/BasePropsType"
import Link from "next/link"


export type ImagePropsType = BasePropsType & {
  data: any
}

export default function Banner({ data, className }: ImagePropsType) {
  const { image, title, description, align } = data
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
          <div className="col-xs-12 col-md-7">
            <h2 className="text-primary text-capitalize" data-animation="fadeInDown" data-duration="300ms" data-delay="900ms">{ title }</h2>
            <p className="text-white" data-animation="fadeInDown" data-duration="300ms" data-delay="500ms">{ description }</p>
            <div className="hero-btn-group" data-duration="300ms" data-animation="fadeInDown" data-delay="100ms">
              <Link href="/" className="btn alime-btn mt-3">test</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}