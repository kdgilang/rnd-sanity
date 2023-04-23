import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"
import Gallery from "./sections/Gallery"

const components: any = {
  gallery: Gallery
}

export type SectionPropsType = BasePropsType & {
  items: Array<BaseDataType>
}
export default function Section({ items, className }: SectionPropsType) {

  return (
    <>
      {items?.map((item: any) => {
        if (!item.__component) return null

        const Section = components[item.__component]
        const { title, content } = item

        return (
          <div
            key={`section-${item.id}`}
            className={classNames(
              "section-padding-80",
              `section-${item.__component}`,
              className || ""
            )}>
            <div className="container">
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