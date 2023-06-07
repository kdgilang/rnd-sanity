import classNames from "app/helpers/classNames";
import { BasePropsType } from "app/types/BasePropsType";

type EmbedDataType = {
  embed_code: string
}

export type EmbedPropsType = {
  className?: string
  data: EmbedDataType
}

export default function Embed({ data , className }: EmbedPropsType) {
  const { embed_code } = data
  return (
    <div className={classNames(
      className || ""
    )} dangerouslySetInnerHTML={{ __html: embed_code }}>
    </div>
  )
}