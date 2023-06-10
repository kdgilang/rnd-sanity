import SectionModel from "@sanity/models/SectionModel"
import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"
import SectionHeading from "./SectionHeading"
import Accordion from "./sections/Accordion"
import Carousel from "./sections/Carousel"
import Embed from "./sections/Embed"
import Gallery from "./sections/Gallery"
import GalleryList from "./sections/GalleryList"
import Banner from "./sections/Banner"
import Service from "./sections/Service"
import Team from "./sections/Team"
import Video from "./sections/Video"

const Components: any = {
  accordion: Accordion,
  gallery: Gallery,
  embed: Embed,
  video: Video,
  team: Team,
  service: Service,
  bannerComponent: Banner,
  'featured-carousel': Carousel,
  'gallery-list': GalleryList
}

export type SectionPropsType = BasePropsType & {
  sections: Array<SectionModel>
}
export default function Section({ sections, className }: SectionPropsType) {

  return (
    <>
      {sections?.map((item, i) => {
        if (!item._type) return null

        const { title, component, color, marginY, paddingY } = item

        const Component = Components[component._type]

        if (!Section) {
          return null
        }
        
        return (
          <div
            key={`section-${item._key}`}
            className={classNames(
              "text-center",
              item?.container,
              "px-0",
              marginY,
              paddingY,
              className || ""
            )} style={{ backgroundColor: color?.hex }}>
              { title &&
                <div className="row">
                  <div className="col-12">
                    <SectionHeading title={title} isCenter={true} />
                  </div>
                </div>
              }
              <Component data={component} />
          </div>
        )
      })}
    </>
  )
}