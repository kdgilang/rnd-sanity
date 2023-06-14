import classNames from "app/helpers/classNames";
import PortableBlock from "../PortableBlock";
import { TypedObject } from "sanity";
import { BasePropsType } from "@app/types/BasePropsType";

type RichTextDataType = {
  body: TypedObject | TypedObject[]
}

export type RichTextPropsType = BasePropsType & {
  className?: string
  data: RichTextDataType
}

export default function RichText({ data , className }: RichTextPropsType) {
  const { body } = data

  return (
    <div className={classNames(
      "wow fadeIn",
      className || ""
    )} data-wow-delay="300ms">
      <PortableBlock value={body} />
    </div>
  )
}