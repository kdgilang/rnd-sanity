import classNames from "@src/app/helpers/classNames";
import { BasePropsType } from "@src/app/types/BasePropsType";
import Image from "next/image";

type EmbedDataType = {
  team_items: any[]
}

export type EmbedPropsType = BasePropsType & {
  data: EmbedDataType
}

export default function Team({ data, className }: EmbedPropsType) {
  const { team_items } = data
  let delay = 200;
  return (
    <div className={classNames(
      "row align-items-center justify-content-center",
      className || ""
    )}>
      {team_items?.map((item, i) => (
        <div key={`team-item-${item.id}`} className="col-md-6 col-xl-3">
          <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay={`${(delay * (i+1))}ms`}>
            <div className="member-thumb">
              <Image src={item?.image?.formats?.medium?.url} width={200} height={200} alt={item?.name} />
            </div>
            <h5>{ item.name }</h5>
            <span className="mt-5"><strong>{ item.job_title }</strong></span>
            <div className="member-social-info">
              <a className="btn alime-btn btn-1 mt-10 wow fadeInBounce" data-wow-delay="500ms" href={item.link_url}>{ item.link_label }</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}