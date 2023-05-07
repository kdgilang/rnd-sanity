'use client'
import { BasePropsType } from '../types/BasePropsType'

type LoadingType = BasePropsType & {
  color?: string
}

export default function Loading({ color }: LoadingType) {
  return <div id="preloader">
    <div className="loader"></div>
  </div>
}