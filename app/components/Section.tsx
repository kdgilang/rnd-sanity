import SectionModel from "@sanity/models/SectionModel"
import classNames from "../helpers/classNames"
import { BasePropsType } from "../types/BasePropsType"
import SectionHeading from "./SectionHeading"
import accordionComponent from "./sections/Accordion"
import bannerComponent from "./sections/Banner"
import carouselComponent from "./sections/Carousel"
import embedComponent from "./sections/Embed"
import mediaTileComponent from "./sections/MediaTile"
import cardComponent from "./sections/Card"
// import Service from "./sections/Service"
// import Team from "./sections/Team"

const Components: any = {
  accordionComponent,
  bannerComponent,
  cardComponent,
  carouselComponent,
  embedComponent,
  mediaTileComponent,
  // team: Team,
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

        if (!Component) {
          return null
        }
        
        return (
          <div
            key={`section-${item._key}`}
            className={classNames(
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