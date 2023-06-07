import classNames from "app/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";

type EmbedDataType = {
  title: string
  content: string
  link: any
  embed_url: string
  image: any
}

export type EmbedPropsType = BasePropsType & {
  data: EmbedDataType
}

export default function Video({ data, className }: EmbedPropsType) {
  const { embed_url, title, link, content, image } = data
  return (
    <div className={classNames(
      "text-left row align-items-center",
      className || ""
    )}>
      <div className="col-12 col-lg-6">
        <div className="about-us-content">
          <div className="d-inline-block mb-4">
            <h2 className="wow fadeInUp" data-wow-delay="100ms">{ title }</h2>
            <div className="line wow fadeInUp" data-wow-delay="200ms"></div>
          </div>
          <p className="wow fadeInUp" data-wow-delay="300ms">{ content }</p>
          <a className="btn alime-btn btn-2 mt-15 wow fadeInUp" data-wow-delay="500ms" href={link?.url}>{ link?.label }</a>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="about-video-area wow fadeInUp" data-wow-delay="100ms">
          <Image src={image?.formats?.medium?.url} height={100} width={150} alt={title} />
          <div className="video-icon">
            <Link href={embed_url} style={{ lineHeight: 1 }} className="video-play-btn" aria-label="play the video">
              <i className="fa fa-play" style={{ lineHeight: '50px', fontSize: '22px'}} aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}