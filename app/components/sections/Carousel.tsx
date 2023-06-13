import { urlForImage } from "@sanity/lib/image"
import classNames from "app/helpers/classNames"
import { BasePropsType } from "app/types/BasePropsType"
import Link from "next/link"

export type CarouselPropsType = BasePropsType & {
  data: any
}

export default function Carousel({ data, className }: CarouselPropsType) {
  const { align, size, animation, carouselItems } = data
  return (
    <div className={classNames(
      "welcome-area",
      className || ""
    )}>
      <div className="welcome-slides owl-carousel" data-type={animation}>
        {
          carouselItems?.map((item: any) => (
            <div
              key={`item-${item._key}`}
              className={classNames(
                size,
                "single-welcome-slide bg-img bg-overlay jarallax"
              )}
              style={{ backgroundImage: `url(${urlForImage(item?.image).url()})` }}>
              <div className="container h-100">
                <div className={classNames(
                  align,
                  "row h-100 align-items-center"
                )}>
                  <div className="col-12 col-lg-8 col-xl-6">
                    <div className="welcome-text">
                      <h2 data-animation="fadeInDown" data-duration="300ms" data-delay="900ms">{ item.title }</h2>
                      <p data-animation="fadeInDown" data-duration="300ms" data-delay="500ms">{ item.description }</p>
                      { item?.link &&
                        <div className="hero-btn-group" data-duration="300ms" data-animation="fadeInDown" data-delay="100ms">
                          <Link href={item?.link?.uri} className="btn alime-btn mb-3 mb-sm-0 mr-4">{ item?.link?.label }</Link>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}