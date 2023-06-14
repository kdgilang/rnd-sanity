import classNames from "app/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";

type EmbedDataType = {
  code: string
}

export type EmbedPropsType = BasePropsType & {
  className?: string
  data: EmbedDataType
}

export default function Embed({ data , className }: EmbedPropsType) {
  const { code } = data

  return (
    code ? <div
    data-wow-delay="300ms"
    className={classNames(
      "wow fadeIn",
      className || ""
    )} dangerouslySetInnerHTML={{ __html: code }}>
    </div> : null
  )
}