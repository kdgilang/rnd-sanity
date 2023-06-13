import SectionModel from "@sanity/models/SectionModel"
import classNames from "../../helpers/classNames"
import { BasePropsType } from "../../types/BasePropsType"
import SectionHeading from "../SectionHeading"
import accordionComponent from "../sections/Accordion"
import bannerComponent from "../sections/Banner"
import carouselComponent from "../sections/Carousel"
import embedComponent from "../sections/Embed"
import mediaTileComponent from "../sections/MediaTile"
import cardComponent from "../sections/Card"

const Components: any = {
  accordionComponent,
  bannerComponent,
  cardComponent,
  carouselComponent,
  embedComponent,
  mediaTileComponent,
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
              item?.container !== "container" ? "px-0" : "",
              item?.container,
              marginY,
              paddingY,
              className || ""
            )} style={{ backgroundColor: color?.hex }}>

              { title && (<div className="px-2 px-md-5">
                  <SectionHeading title={title} isCenter={true} /> 
                </div>)
              }
              <Component data={component} />
          </div>
        )
      })}
    </>
  )
}