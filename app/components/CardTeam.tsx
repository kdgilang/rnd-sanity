import IconBuilder from "@sanity/lib/icon";
import { urlForImage } from "@sanity/lib/image";
import classNames from "@app/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";
import Image from "next/image";

export type CardTeamPropsType = BasePropsType & {
  data: any
}

export default function CardTeam({ data, className }: CardTeamPropsType) {
  const { _type, name, title, image, delay, networkItems } = data
  return (
    <div className={classNames(
      _type,
      "team-content-area text-center mb-30 wow fadeInUp",
      className || ""
    )} data-wow-delay={`${delay}ms`}>
      <div className="member-thumb">
        <Image src={urlForImage(image).size(200, 200).crop('center').url()} width={200} height={200} alt={name} />
      </div>
      <h5 className="text-capitalize">{ name }</h5>
      <span className="mt-5"><strong>{ title }</strong></span>
      <div className="member-social-info mt-2">
        {
          networkItems?.map((item: any) => {
            const Icon = IconBuilder(item.icon.name)
            return <a key={item._key} href="#"><Icon /></a>
          })
        }
      </div>
    </div>
  )
}