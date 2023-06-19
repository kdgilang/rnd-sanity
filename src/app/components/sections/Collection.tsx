'use client'

import { BasePropsType } from "src/app/types/BasePropsType"
import Grid from "src/app/components/Grid"
import classNames from "src/app/helpers/classNames"
import { getContentsByFilterService } from "@services/getContentsByFilterService"
import { useEffect, useState } from "react"
import { BaseContentModel } from "@sanity/models/BaseModel"
import Skeleton from "../Skeleton"

export type CollectionPropsType = BasePropsType & {
  data: any
}

export default function Collection({ data, className }: CollectionPropsType) {
  const { limit, type, } = data

  const [cards, setCards] = useState<BaseContentModel[]>(new Array<BaseContentModel>())
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    async function fetch() {
      const cardsRes = await getContentsByFilterService({
        limit,
        type,
      })
      setCards(cardsRes)
      setIsFirstLoad(false)
    }
    fetch()
  }, [limit, type])

  const [isFullyLoaded, setIsFullyLoaded] = useState(false)

  const [index, setIndex] = useState(0)

  const [isBusy, setIsBusy] = useState(false)

  const handleLoadMore = async () => {
    if (isBusy || isFullyLoaded) return

    setIsBusy(true)
    const currentIndex = index + limit
    const currentLimit = currentIndex + limit;

    const cardsRes = await getContentsByFilterService({
      index: currentIndex,
      limit: currentLimit,
      type,
    })

    if (cardsRes?.length) {
      setIndex(currentIndex)
  
      setCards((prevcards: any) => [
        ...prevcards,
        ...cardsRes
      ])
    } else {
      setIsFullyLoaded(true)
    }

    setIsBusy(false)
  }

  return isFirstLoad ? (
      <Loading />
    ) : (
      <>
        <Grid
          items={cards}
          isAjax={true} 
          className={classNames(
            className || ""
          )} />

        <div className="row mt-4">
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="300ms">
          { isBusy && <div className="loader mx-auto mb-4 wow fadeIn"></div> }
          { isFullyLoaded ? "Fully loaded." :
            <button className="btn alime-btn btn-2 mt-15" onClick={handleLoadMore}>Load More</button>}
          </div>
        </div>
      </>
      )
}

function Loading() {
  return (
    <div className="row">
      {Array.from({length: 8}).map((item, i) => {
        return <div key={`skeleton-collection-${i}`}
          className="col-12 col-sm-6 col-lg-3 mb-3">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-12">
                <Skeleton height={150} />
              </div>
              <div className="col-12">
                <div className="card-body">
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}