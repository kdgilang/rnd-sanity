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
        "d-flex align-items-center justify-content-center",
        className || ""
      )}>
        { cards?.map((item: any, i: number) => {
          item.delay = (i+1) * 180
            return (<div key={item._id} className="p-2">
              {
                item._type === 'teamComponent' ?
                  <CardTeam data={item} className={item._type} /> :
                  <Card key={item._id} data={item} className={item._type} />
              }
            </div>)
        }) }
      </div>
    )
  } else {
    return (
     <Grid data={cards} />
    )
  }
}