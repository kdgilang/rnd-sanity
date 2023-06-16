import classNames from "../helpers/classNames"
import { BasePropsType } from "../types/BasePropsType"

export type SectionHeadingPropsType = BasePropsType & {
  isCenter: boolean
}
export default function SectionHeading({ title, content, isCenter, className }: SectionHeadingPropsType) {

  return (
    <>
    { (title || content) &&
      <div className={classNames(
        "section-heading mb-5",
        isCenter ? "text-center" : "text-left", 
        className || ""
      )}>
        { title && 
          <div className="d-inline-block">
            <h2 className="wow fadeInUp" data-wow-delay="100ms">{title}</h2>
            <div className={classNames(
              "line wow fadeInUp",
              isCenter ? "mx-auto" : "",
            )} data-wow-delay="230ms"></div>
          </div>
        }
        {content && <p>{content}</p>}
      </div> }
    </>
  
  )
}