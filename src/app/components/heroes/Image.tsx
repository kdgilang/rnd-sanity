import classNames from "@src/app/helpers/classNames"
import { BaseDataType, BasePropsType } from "@src/app/types/BasePropsType"

type ImageDataType = BaseDataType & {
  image: any
}

export type ImagePropsType = BasePropsType & {
  data: ImageDataType
}


export default function Image({ data, className }: ImagePropsType) {
  const { image, title, content } = data
  return (
    <section className={classNames(
      "breadcrumb-area bg-img bg-overlay jarallax",
      className || ""
    )}
    style={{backgroundImage: `url(${image?.url})`}}>

      <div className="container h-100">
          <div className="row h-100 align-items-center">
              <div className="col-12">
                  <div className="breadcrumb-content text-center">
                      <h2 className="page-title">{ title }</h2>
                      <p style={{ color: '#ccc' }}>{ content }</p>
                      {/* <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-center">
                              <li className="breadcrumb-item"><a href="index.html"><i className="icon_house_alt"></i> Home</a></li>
                              <li className="breadcrumb-item active" aria-current="page">Blog</li>
                          </ol>
                      </nav> */}
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}