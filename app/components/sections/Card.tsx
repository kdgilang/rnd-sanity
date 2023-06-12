import { BasePropsType } from "@src/types/BasePropsType"
import Card from "@components/Card"
import Grid from "@components/Grid"
import CardTeam from "@components/CardTeam"
import classNames from "@src/helpers/classNames"

export type CardPropsType = BasePropsType & {
  data: any
}

export default function Cards({ data, className }: CardPropsType) {
  const { cards, view } = data

  if (view === 'carousel') {
    return(
      <div className={classNames(
        "card-carousel owl-carousel owl-theme",
        className || ""
      )}>
        { cards?.map((item: any, i: number) => {
          item.delay = (i+1) * 180
          
          if(item._type === 'teamComponent') {
            return <CardTeam key={item._id} data={item} />
          } 
          return <Card key={item._id} data={item} />
        }) }
      </div>
    )
  } else {
    return (
     <Grid data={cards} />
    )
  }
}