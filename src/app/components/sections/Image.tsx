import classNames from "@src/app/helpers/classNames"
import { BaseDataType, BasePropsType } from "@src/app/types/BasePropsType"

type ImageDataType = BaseDataType & {
  image: any
}

export type ImagePropsType = BasePropsType & {
  data: ImageDataType
}


export default function SingleImage({ data, className }: ImagePropsType) {
  const { image, title, content } = data
  return (
    <div className={classNames(
      "breadcrumb-area bg-img bg-overlay jarallax",
      className || ""
    )}
    style={{backgroundImage: `url(${image?.url})`}}>
      <div className="container h-100">
          <div className="row h-100 align-items-center">
              <div className="col-12">
                  <div className="single-image-content text-center">
                    <h2 className="page-title">{ title }</h2>
                    <p>{ content }</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}