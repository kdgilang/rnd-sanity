import classNames from "../helpers/classNames"
import { BaseDataType, BasePropsType } from "../types/BasePropsType"
import HeroCarousel from "./heroes/Carousel"
import SingleImage from "./heroes/Image"

const components: any = {
  'carousel': HeroCarousel,
  'single-image': SingleImage
}

type HeroDataType = BaseDataType & {
  __component: string
}

export type HeroPropsType = BasePropsType & {
  data: HeroDataType
}

export default function Hero({ className, data }: HeroPropsType) {
  const { __component, ...heroData } = data

  if (!__component) {
    return null
  }

  const Hero = components[__component]

  if (!Hero) {
    return null
  }
  
  return (
    <div className={classNames(
      className || "")}>
      <Hero data={heroData} />
    </div>
  )
}