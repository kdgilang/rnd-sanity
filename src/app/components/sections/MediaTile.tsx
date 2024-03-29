import { urlForImage } from "@sanity/lib/image";
import classNames from "src/app/helpers/classNames";
import { BasePropsType } from "src/app/types/BasePropsType";
import Image from "next/image";
import Link from "next/link";
import PortableBlock from "src/app/components/PortableBlock";
import { FaPlay } from 'react-icons/fa';

type EmbedDataType = {
  body: any
  videoUrl: string
  image: any
}

export type EmbedPropsType = BasePropsType & {
  data: EmbedDataType
}

export default function MediaTile({ data, className }: EmbedPropsType) {
  const { videoUrl, body, image } = data
  const imageUrl = image._id ? urlForImage(image).size(680, 480).crop('center').toString() : ''
  return (
    <div className={classNames(
      "text-left row align-items-center",
      className || ""
    )}>
      <div className="col-12 col-lg-6">
        <div className="about-us-content wow fadeIn" data-wow-delay="200ms">
          <PortableBlock value={ body }  />
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="about-video-area wow fadeIn" data-wow-delay="300ms">
          { imageUrl && <Image src={imageUrl} height={100} width={150} alt="media cover" /> }
          { videoUrl && <div className="video-icon">
            <Link href={videoUrl} style={{ lineHeight: 1 }} className="video-play-btn" aria-label="play the video">
              <FaPlay style={{ lineHeight: '50px', fontSize: 22}} aria-hidden="true" />
            </Link>
          </div>}
        </div>
      </div>
    </div>
  )
}