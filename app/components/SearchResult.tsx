'use client'
import ListTile from "@app/components/ListTile";
import { BaseDocumentModel } from "@sanity/models/BaseModel";
import { getSearchService } from "@services/getSearchService";
import { useEffect, useState } from "react";

const getData = async (keyword: string) => {
  const data = await getSearchService(keyword)

  return data
}

export default function SearchResult({ keyword }: any) {
  const [data, setData] = useState<BaseDocumentModel[]>()

  useEffect(() => {
    async function fetchData() {
      const data = await getData(keyword)
      setData(data)
    }

    fetchData();
  }, [keyword])

  return (
    <>
    { data?.length ? <ListTile data={data} /> : <p>No items found.</p>}
    </>
  )
}