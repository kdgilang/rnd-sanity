import { BasePropsType } from "@app/types/BasePropsType"
import Grid from "@components/Grid"
import classNames from "@app/helpers/classNames"

export type CollectionPropsType = BasePropsType & {
  data: any
}

export default function Collection({ data, className }: CollectionPropsType) {
  const { limit, type, } = data
  return (<></>
    // <Grid
    //   data={cards}
    //   isAjax={true} 
    //   className={classNames(
    //     className || ""
    //   )} />
  )
}