import classNames from "../helpers/classNames"
import { BasePropsType } from "../types/BasePropsType"
import HeroCarousel from "./heroes/Carousel"

const components = {
  carousel: HeroCarousel
}

export type HeroPropsType = BasePropsType & {
  title?: string
  content?: string
  type: 'carousel'
  animations: string
  items: Array<HeroItemModel>
}

export class HeroItemModel {
  id: number
  title: string
  content: string
  mediaSrc: string
  buttonUrl: string
  buttonText: string

  constructor() {
    this.id = 0
    this.title = ''
    this.content = ''
    this.mediaSrc = ''
    this.buttonText = ''
    this.buttonUrl = ''
  }
}

export default function Hero({ className, type, items, animations }: HeroPropsType) {
  const Component = components[type]
  
  return (
    <div className={classNames(className || "")}>
      <Component items={items} animations={animations} />
    </div>
  )
}