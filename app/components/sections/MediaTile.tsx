import { PortableText } from "@portabletext/react";
import { urlForImage } from "@sanity/lib/image";
import classNames from "app/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";

type EmbedDataType = {
  body: any
  video_url: string
  image: any
}

export type EmbedPropsType = BasePropsType & {
  data: EmbedDataType
}

export default function MediaTile({ data, className }: EmbedPropsType) {
  const { video_url, body, image } = data
  return (
    <div className={classNames(
      "text-left row align-items-center",
      className || ""
    )}>
      <div className="col-12 col-lg-6">
        <div className="about-us-content wow fadeInUp" data-wow-delay="200ms">
          <PortableText value={ body }  />
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="about-video-area wow fadeInUp" data-wow-delay="300ms">
          <Image src={urlForImage(image).url()} height={100} width={150} alt="media cover" />
          { video_url && <div className="video-icon">
            <Link href={video_url} style={{ lineHeight: 1 }} className="video-play-btn" aria-label="play the video">
              <i className="fa fa-play" style={{ lineHeight: '50px', fontSize: '22px'}} aria-hidden="true"></i>
            </Link>
          </div>}
        </div>
      </div>
    </div>
  )
}