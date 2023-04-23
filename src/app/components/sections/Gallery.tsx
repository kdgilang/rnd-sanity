import classNames from "@src/app/helpers/classNames";
import { BaseDataType, BasePropsType } from "@src/app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";

type GalleryDataType = BaseDataType & {
  galleries: any[]
}

export type GalleryPropsType = BasePropsType & {
  data: GalleryDataType
}

export default function Gallery({ data, className }: GalleryPropsType) {
  const { title, content, galleries } = data
  let delay = 0
  return (
    <div className={classNames(
      "alime-portfolio-area section-padding-80 clearfix",
      className || ""
    )}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2>{ title }</h2>
              <p>{ content }</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="alime-projects-menu">
              <div className="portfolio-menu text-center">
                <button className="btn active" data-filter="*">All</button>
                <button className="btn" data-filter=".wedding">Wedding</button>
                <button className="btn" data-filter=".birthday">Birthday</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row alime-portfolio">
          { galleries?.map((item, i) => {
            delay =  i * 150
            let slugs = item?.categories?.map((c: any) => c.slug.toLowerCase())
            return <div
              key={`gallery-${item.id}`}
              className={classNames(
                "col-12 col-sm-6 col-lg-3 single_gallery_item mb-30 wow fadeInUp",
                slugs?.join(',')
              )}
              data-wow-delay={`${ delay }ms`}>
              <div className="single-portfolio-content">
                <Image src={item?.images?.[0]?.formats?.thumbnail?.url} width={200} height={100} alt={item.title} />
                <div className="hover-content">
                  <a href={item?.images?.[0]?.url} className="portfolio-img">+</a>
                </div>
              </div>
            </div>
          })}
        </div>

        <div className="row">
          <div className="col-12 text-center wow fadeInUp" data-wow-delay={`${delay + 200}ms`}>
            <Link href="/gallery" className="btn alime-btn btn-2 mt-15">View More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}