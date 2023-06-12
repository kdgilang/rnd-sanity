import { BasePropsType } from "@src/types/BasePropsType"
import Card from "@components/Card"

export type CardPropsType = BasePropsType & {
  data: any
}

export default function Cards({ data, className }: CardPropsType) {
  const { cards } = data
  return(
  <div className="card-carousel owl-carousel owl-theme">
    { cards?.map((item: any, i: number) => {
      item.delay = (i+1) * 180
      return <Card key={item._key} data={item} />
    }) }
  </div>
  )
}