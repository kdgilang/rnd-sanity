import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"
import Embed from "./sections/Embed"
import Gallery from "./sections/Gallery"
import Service from "./sections/Service"
import Team from "./sections/Team"
import Video from "./sections/Video"

const components: any = {
  gallery: Gallery,
  embed: Embed,
  video: Video,
  team: Team,
  service: Service
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
        const containerClassName = settings?.container === 'Contained' ? 'container' : 'container-fluid'
        const disableTitle = ['video']

        if (!Section) {
          return null
        }
        
        return (
          <div
            key={`section-${item.id}`}
            className={classNames(
              "section-padding text-center",
              `section-${type}`,
              i % 2 === 0 ? "bg-gray" : "",
              className || ""
            )}>
            <div className={containerClassName}>
              {( disableTitle.indexOf(type) < 0 && (title || content)) &&
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading">
                      { title && 
                        <div className="d-inline-block">
                          <h2>{title}</h2>
                          <div className="line wow fadeInUp mx-auto" data-wow-delay="200ms"></div>
                        </div>
                      }
                      {content && <p>{content}</p>}
                    </div>
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