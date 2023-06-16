import SectionModel from "@sanity/models/SectionModel"
import classNames from "src/app/helpers/classNames"
import { BasePropsType } from "src/app/types/BasePropsType"
import SectionHeading from "src/app/components/SectionHeading"
import accordionComponent from "src/app/components/sections/Accordion"
import bannerComponent from "src/app/components/sections/Banner"
import carouselComponent from "src/app/components/sections/Carousel"
import embedComponent from "src/app/components/sections/Embed"
import mediaTileComponent from "src/app/components/sections/MediaTile"
import cardComponent from "src/app/components/sections/Card"
import richTextComponent from "src/app/components/sections/RichText"
import collectionComponent from "src/app/components/sections/Collection"

const Components: any = {
  accordionComponent,
  bannerComponent,
  cardComponent,
  carouselComponent,
  embedComponent,
  mediaTileComponent,
  richTextComponent,
  collectionComponent,
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