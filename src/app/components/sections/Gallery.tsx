import classNames from "@src/app/helpers/classNames";
import { SingleImageModel } from "@src/app/models/SingleImageModel";
import { BasePropsType } from "@src/app/types/BasePropsType";
import Image from "next/image";

export type GalleryPropsType = BasePropsType & {
  items: Array<SingleImageModel>
}

export default function Gallery({ items, className }: GalleryPropsType) {
  return (
    <div className={classNames(
      "alime-portfolio-area section-padding-80 clearfix",
      className || ""
    )}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="alime-projects-menu">
              <div className="portfolio-menu text-center">
                <button className="btn active" data-filter="*">All</button>
                <button className="btn" data-filter=".human">Human</button>
                <button className="btn" data-filter=".nature">Nature</button>
                <button className="btn" data-filter=".country">Country</button>
                <button className="btn" data-filter=".video">Video</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row alime-portfolio">
          <div className="col-12 col-sm-6 col-lg-3 single_gallery_item country mb-30 wow fadeInUp" data-wow-delay="500ms">
            <div className="single-portfolio-content">
                <Image src="img/bg-img/5.jpg" alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/5.jpg" className="portfolio-img">+</a>
                </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="700ms">
            <a href="#" className="btn alime-btn btn-2 mt-15">View More</a>
          </div>
        </div>
      </div>
    </div>
  )
}