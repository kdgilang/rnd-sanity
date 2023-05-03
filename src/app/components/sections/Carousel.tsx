import classNames from "@src/app/helpers/classNames"
import { BaseDataType, BasePropsType } from "@src/app/types/BasePropsType"
import Image from "next/image"
import Link from "next/link"


type CarouselDataType = BaseDataType & {
  animations: string
  images: any[]
  link: any
}

export type CarouselPropsType = BasePropsType & {
  data: CarouselDataType
}


export default function Carousel({ data, className }: CarouselPropsType) {
  const { animations, images, title, content, link } = data
  return (
    <div className={classNames(
      "text-left row align-items-center",
      className || ""
    )}>
      <div className="col-12 col-lg-6">
        <div className="about-video-area wow fadeInUp" data-wow-delay="100ms">
          <div className="welcome-slides owl-carousel" data-animations={animations}>
          {
            images?.map(item => (
              <Image key={`image-${item.id}`} src={item?.formats?.medium?.url} height={100} width={150} alt={title} />
            ))
          }
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="about-us-content">
          <div className="d-inline-block mb-4">
            <h2 className="wow fadeInUp" data-wow-delay="100ms">{ title }</h2>
            <div className="line wow fadeInUp" data-wow-delay="200ms"></div>
          </div>
          <p className="wow fadeInUp" data-wow-delay="300ms">{ content }</p>
          <Link className="btn alime-btn btn-2 mt-15 wow fadeInUp" data-wow-delay="500ms" href={link?.url}>{ link?.label }</Link>
        </div>
      </div>
    </div>
  )
}