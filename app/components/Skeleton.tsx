import BaseSkeleton from 'react-loading-skeleton'
import classNames from 'app/helpers/classNames'
import 'react-loading-skeleton/dist/skeleton.css'
import { BasePropsType } from '../types/BasePropsType'

type SkeletonPropsType = BasePropsType & {
  containerClassName?: string
  count?: number,
  height?: number
}

export default function Skeleton({ containerClassName, className, count, height}: SkeletonPropsType) {
  return <BaseSkeleton 
    containerClassName={classNames(
      "w-100 h-100 position-relative d-block",
      containerClassName || "",
    )}
    className={classNames(
      "w-100 h-100 object-fit-cover d-block",
      className || ""
    )}
    highlightColor="#EFEFEF"
    baseColor="#CCCCCC"
    count={count}
    height={height}
  />
}