import classNames from "@src/app/helpers/classNames";
import { BasePropsType } from "@src/app/types/BasePropsType";

type EmbedDataType = {
  service_items: any[]
}

export type EmbedPropsType = BasePropsType & {
  data: EmbedDataType
}

export default function Service({ data, className }: EmbedPropsType) {
  const { service_items } = data
  let delay = 200;
  return (
    <div className={classNames(
      "row justify-content-center",
      className || ""
    )}>
      {service_items?.map((item, i) => (
        <div key={`service-item-${item.id}`} className="col-md-6 col-lg-4">
          <div className="why-choose-us-content text-center wow fadeInUp" data-wow-delay={`${(delay * (i+1))}ms`}>
            <div className="chosse-us-icon">
              <i className={item.icon} aria-hidden="true"></i>
            </div>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}