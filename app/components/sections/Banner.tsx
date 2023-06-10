import { urlForImage } from "@sanity/lib/image"
import classNames from "app/helpers/classNames"
import { BaseDataType, BasePropsType } from "app/types/BasePropsType"
import Link from "next/link"


export type ImagePropsType = BasePropsType & {
  data: any
}


export default function Banner({ data, className }: ImagePropsType) {
  const { image, title, description } = data
  return (
    <div className={classNames(
      "breadcrumb-area bg-img bg-overlay jarallax",
      className || ""
    )}
    style={{backgroundImage: `url(${urlForImage(image).url()})`}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-xs-12 col-md-7">
            <h2 data-animation="fadeInDown" data-duration="300ms" data-delay="900ms">{ title }</h2>
            <p data-animation="fadeInDown" data-duration="300ms" data-delay="500ms">{ description }</p>
            <div className="hero-btn-group" data-duration="300ms" data-animation="fadeInDown" data-delay="100ms">
              <Link href="/" className="btn alime-btn mb-3 mb-sm-0 mr-4">test</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}