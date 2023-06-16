'use client'

import { BasePropsType } from "@app/types/BasePropsType"
import Grid from "@components/Grid"
import classNames from "@app/helpers/classNames"
import { getContentsByFilterService } from "@services/getContentsByFilterService"
import { useEffect, useState } from "react"
import { BaseDocumentModel } from "@sanity/models/BaseModel"

export type CollectionPropsType = BasePropsType & {
  data: any
}

export default function Collection({ data, className }: CollectionPropsType) {
  const { limit, type, } = data

  const [cards, setCards] = useState<BaseDocumentModel[]>(new Array<BaseDocumentModel>())

  useEffect(() => {
    async function fetch() {
      const cardsRes = await getContentsByFilterService({
        limit,
        type,
      })
      setCards(cardsRes)
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

  return (
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