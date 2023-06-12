import { urlForImage } from "@sanity/lib/image";
import classNames from "@src/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";
import Image from "next/image";

export type EmbedPropsType = BasePropsType & {
  data: any
}

export default function CardTeam({ data, className }: EmbedPropsType) {
  const { name, title, image, delay } = data
  return (
    <div className={classNames(
      "team-content-area text-center mb-30 wow fadeInUp",
      className || ""
    )} data-wow-delay={`${delay}ms`}>
      <div className="member-thumb">
        <Image src={urlForImage(image).size(200, 200).crop('center').url()} width={200} height={200} alt={name} />
      </div>
      <h5>{ name }</h5>
      <span className="mt-5"><strong>{ title }</strong></span>
      <div className="member-social-info">
        {/* <a className="btn alime-btn btn-1 mt-10 wow fadeInBounce" data-wow-delay="500ms" href={item.link_url}>{ item.link_label }</a> */}
      </div>
    </div>
  )
}