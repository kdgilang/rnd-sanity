import SectionModel from "@sanity/models/SectionModel"
import classNames from "@app/helpers/classNames"
import { BasePropsType } from "@app/types/BasePropsType"
import SectionHeading from "@components/SectionHeading"
import accordionComponent from "@components/sections/Accordion"
import bannerComponent from "@components/sections/Banner"
import carouselComponent from "@components/sections/Carousel"
import embedComponent from "@components/sections/Embed"
import mediaTileComponent from "@components/sections/MediaTile"
import cardComponent from "@components/sections/Card"
import richTextComponent from "@components/sections/RichText"
import collectionComponent from "@components/sections/Collection"

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