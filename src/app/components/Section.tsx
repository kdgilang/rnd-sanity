import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"
import SectionHeading from "./SectionHeading"
import Accordion from "./sections/Accordion"
import Carousel from "./sections/Carousel"
import Embed from "./sections/Embed"
import Gallery from "./sections/Gallery"
import SingleImage from "./sections/Image"
import Service from "./sections/Service"
import Team from "./sections/Team"
import Video from "./sections/Video"

const components: any = {
  accordion: Accordion,
  gallery: Gallery,
  embed: Embed,
  video: Video,
  team: Team,
  service: Service,
  'single-image': SingleImage,
  'featured-carousel': Carousel
}

export type SectionPropsType = BasePropsType & {
  items: Array<BaseDataType>
}
export default function Section({ items, className }: SectionPropsType) {

  return (
    <>
      {items?.map((item: any, i) => {
        if (!item.__component) return null

        const type = item.__component
        const Section = components[type]
        const { title, content, settings } = item
        let containerClassName = settings?.container === 'Contained' ? 'container' : 'container-fluid'
        const disableTitle = ['video', 'single-image', 'featured-carousel']
        const disablePadding = ['single-image']

        if (!Section) {
          return null
        }

        if (type === 'single-image') {
          containerClassName = ""
        }
        
        return (
          <div
            key={`section-${item.id}`}
            className={classNames(
              disablePadding.indexOf(type) < 0 ? "section-padding" : "",
              "text-center",
              `section-${type}`,
              i % 2 === 0 ? "bg-gray" : "",
              className || ""
            )}>
            <div className={containerClassName}>
              {( disableTitle.indexOf(type) < 0 && (title || content)) &&
                <div className="row">
                  <div className="col-12">
                    <SectionHeading title={title} content={content} isCenter={true} />
                  </div>
                </div>
              }
              <Section className={`section-content-${type}`} data={item} />
            </div>
          </div>
        )
      })}
    </>
  )
}