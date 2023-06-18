'use client'
import { useEffect, useState } from 'react'
import { BasePropsType } from '../types/BasePropsType'

type LoadingType = BasePropsType & {
  color?: string
}

export default function Loading({ color }: LoadingType) {
  const [hide, setHide] = useState(false)
  
  useEffect(() => {
    setHide(true)
  },[])

  return !hide ? <div id="preloader">
    <div className="loader"></div>
  </div> : <></>
}