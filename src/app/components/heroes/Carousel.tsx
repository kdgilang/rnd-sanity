import classNames from "@src/app/helpers/classNames"
import { BasePropsType } from "@src/app/types/BasePropsType"
import Link from "next/link"
import { HeroItemModel } from "../Hero"

export type CarouselPropsType = BasePropsType & {
  items: Array<HeroItemModel>
  animations: string
}


export default function Carousel({ animations, items, className }: CarouselPropsType) {
  return (
    <section className={classNames(
      "welcome-area",
      className || ""
    )}>
      <div className="welcome-slides owl-carousel" data-animations={animations}>
        {
          items?.map(item => (
            <div key={`item-${item.id}`} className="single-welcome-slide bg-img bg-overlay" style={{ backgroundImage: `url(${item.mediaSrc})` }}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-lg-8 col-xl-6">
                    <div className="welcome-text">
                      <h2 data-animation="fadeInDown" data-duration="300ms" data-delay="900ms">{ item.title }</h2>
                      <p data-animation="fadeInDown" data-duration="300ms" data-delay="500ms">{ item.content }</p>
                      <div className="hero-btn-group" data-duration="300ms" data-animation="fadeInDown" data-delay="100ms">
                        <Link href={item.buttonUrl} className="btn alime-btn mb-3 mb-sm-0 mr-4">{ item.buttonText }</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}