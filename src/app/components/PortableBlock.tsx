import { PortableText } from "@portabletext/react";
import { urlForImage } from "@sanity/lib/image";
import { getImageDimensions } from '@sanity/asset-utils';
import Image from "next/image";
import { TypedObject } from "sanity";
import { BasePropsType } from "src/app/types/BasePropsType";

const ImageComponent = ({ value }: any) => {
  const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={urlForImage(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      width={width}
      height={height}
      style={{
        aspectRatio: width / height,
      }}
    />
  )
}

export type RichTextPropsType = BasePropsType & {
  className?: string
  value: TypedObject | TypedObject[]
}

export default function PortableBlock({ value }: RichTextPropsType) {
  return <PortableText
    value={value}
    components={
    {
      types: {
        image: ImageComponent,
      }
    }
  }/>
}

