'use client'
import ListTile from "src/app/components/ListTile"
import { getSearchService } from "@services/getSearchService"

const getData = async (keyword: string) => {
  const data = await getSearchService(keyword)

  return data
}

export default async function SearchResult({ keyword }: any) {
  const data = await getData(keyword)

  return (
    <>
      {data?.length ? <ListTile data={data} /> : <p>No items found.</p>}
    </>
  )
}