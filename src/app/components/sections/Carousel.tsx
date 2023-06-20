'use client'
import { urlForImage } from "@sanity/lib/image"
import { linkBuilder } from "@sanity/lib/link"
import classNames from "src/app/helpers/classNames"
import { BasePropsType } from "src/app/types/BasePropsType"
import Link from "next/link"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export type CarouselPropsType = BasePropsType & {
  data: any
}

export default function Carousel({ data, className }: CarouselPropsType) {
  const { align, size, animation, carouselItems } = data

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: animation === 'fade',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="nav-carousel nav-carousel-prev"><AiOutlineArrowLeft/></button>,
    nextArrow: <button className="nav-carousel nav-carousel-next"><AiOutlineArrowRight/></button>
  };

  return (
    <div className={classNames(
      "welcome-area",
      className || ""
    )}>
      <Slider className="carousel" {...settings}>
        {
          carouselItems?.map((item: any) => {
            const { uri, target } = linkBuilder(item?.link)

            const imageUrl = item?.image._id ? urlForImage(item?.image).toString() : ''

            return <div
              key={`item-${item._key}`}>
              <div
                className={classNames(
                size,
                "single-welcome-slide bg-img bg-overlay jarallax"
              )}
              style={{ backgroundImage: `url(${imageUrl})` }}>
              <div className="container h-100">
                <div className={classNames(
                  align,
                  "row h-100 align-items-center"
                )}>
                  <div className="col-12 col-lg-8 col-xl-6">
                    <div className="welcome-text">
                      <h2
                        className="wow fadeInDown" data-wow-delay="100ms"
                      >{ item.title }</h2>
                      <p
                        className="wow fadeInDown" data-wow-delay="300ms"
                      >{ item.description }</p>
                      { item?.link &&
                        <div
                          className="wow fadeInDown" data-wow-delay="500ms"
                        >
                          <Link
                            href={uri}
                            target={target}
                            className="btn alime-btn mb-3 mb-sm-0">
                              { item?.link?.label }
                            </Link>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          })
        }
      </Slider>
    </div>
  )
}