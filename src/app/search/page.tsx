import { Suspense } from "react";
import Search from "../components/Search";
import getSearchService from "../services/getSearchService";
import getSiteSettingsService from "../services/getSiteSettingsService";
import dynamic from 'next/dynamic'
import CardList from "../components/CardList";
import Skeleton from "../components/Skeleton";


const getData = async (keyword: string) => {
  const data = await getSearchService(keyword)

  return data
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { site_name } = await getSiteSettingsService()

  return {
    title: `${ site_name } | Search`,
    description: `Search page of ${ site_name }`,
  };
}

async function Result({ keyword }) {
  const data = await getData(keyword)
  return (
    <>
    { data?.length ? <CardList data={data} /> : <p>No items found.</p>}
    </>
  )
}

export default async function Page({ searchParams }) {

  return (
    <div className="container py-5">
      <div className="section-padding">
        <div className="row mb-5 justify-content-center">
          <div className="col-xs-8 col-md-6">
            <Search />
          </div>
        </div>
        <h1 className="heading mb-5">Search{searchParams?.keyword ? ` "${searchParams?.keyword}"` : ""}</h1>

        <Suspense fallback={<Loading />}>
          <Result keyword={ searchParams?.keyword } />
        </Suspense>
      </div>
    </div>
  )
}

function Loading() {
  return (
    <div className="row">
      {Array.from({length: 6}).map((item, i) => {
        return <div key={`skeleton-search-${i}`} className="col-12 col-xl-6">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <Skeleton />
              </div>
              <div className="col-md-8">
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