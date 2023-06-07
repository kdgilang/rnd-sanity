import classNames from "app/helpers/classNames"
import { BaseDataType, BasePropsType } from "app/types/BasePropsType"
import Link from "next/link"

type CarouselDataType = BaseDataType & {
  animations: string
  carousel_items: any[]
}

export type CarouselPropsType = BasePropsType & {
  data: CarouselDataType
}


export default function Carousel({ data, className }: CarouselPropsType) {
  const { animations, carousel_items } = data
  return (
    <div className={classNames(
      "welcome-area",
      className || ""
    )}>
      <div className="welcome-slides owl-carousel" data-animations={animations}>
        {
          carousel_items?.map(item => (
            <div key={`item-${item.id}`} className="single-welcome-slide bg-img bg-overlay" style={{ backgroundImage: `url(${item?.image?.url})` }}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-lg-8 col-xl-6">
                    <div className="welcome-text">
                      <h2 data-animation="fadeInDown" data-duration="300ms" data-delay="900ms">{ item.title }</h2>
                      <p data-animation="fadeInDown" data-duration="300ms" data-delay="500ms">{ item.content }</p>
                      { item?.link_url &&
                        <div className="hero-btn-group" data-duration="300ms" data-animation="fadeInDown" data-delay="100ms">
                            <Link href={item?.link_url} className="btn alime-btn mb-3 mb-sm-0 mr-4">{ item?.link_label }</Link>
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