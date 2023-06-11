import classNames from "app/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";

type EmbedDataType = {
  code: string
}

export type EmbedPropsType = {
  className?: string
  data: EmbedDataType
}

export default function Embed({ data , className }: EmbedPropsType) {
  const { code } = data

  return (
    code ? <div className={classNames(
      className || ""
    )} dangerouslySetInnerHTML={{ __html: code }}>
    </div> : null
  )
}