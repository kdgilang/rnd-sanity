import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"
import Embed from "./sections/Embed"
import Gallery from "./sections/Gallery"

const components: any = {
  gallery: Gallery,
  embed: Embed
}

export type SectionPropsType = BasePropsType & {
  items: Array<BaseDataType>
}
export default function Section({ items, className }: SectionPropsType) {

  return (
    <>
      {items?.map((item: any, i) => {
        if (!item.__component) return null

        const Section = components[item.__component]
        const { title, content, settings } = item
        const containerClassName = settings?.container === 'Contained' ? 'container' : 'container-fluid'

        return (
          <div
            key={`section-${item.id}`}
            className={classNames(
              "section-padding text-center",
              `section-${item.__component}`,
              i % 2 === 0 ? "bg-gray" : "",
              className || ""
            )}>
            <div className={containerClassName}>
              {(title || content) &&
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading">
                      {title && <h2>{title}</h2>}
                      {content && <p>{content}</p>}
                    </div>
                  </div>
                </div>
              }
              <Section data={item} />
            </div>
          </div>
        )
      })}
    </>
  )
}