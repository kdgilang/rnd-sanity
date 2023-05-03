import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"

export type SectionHeadingPropsType = BasePropsType & {
  isCenter: boolean
}
export default function SectionHeading({ title, content, isCenter, className }: SectionHeadingPropsType) {

  return (
    <>
    { (title || content) &&
      <div className={classNames(
        "section-heading",
        isCenter ? "text-center" : "text-left", 
        className || ""
      )}>
        { title && 
          <div className="d-inline-block">
            <h2>{title}</h2>
            <div className={classNames(
              "line wow fadeInUp",
              isCenter ? "mx-auto" : "",
            )} data-wow-delay="200ms"></div>
          </div>
        }
        {content && <p>{content}</p>}
      </div> }
    </>
  
  )
}