import { Suspense } from "react";
import SearchForm from "app/components/SearchForm";
import Skeleton from "app/components/Skeleton";
import { getSearchService } from "@services/getSearchService";
import getSiteSettingsService from "@services/getSiteSettingService";
import SearchResult from "@app/components/SearchResult";

const getData = async (keyword: string) => {
  const data = await getSearchService(keyword)

  return data
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { name } = await getSiteSettingsService()

  return {
    title: `${ name } | Search`,
    description: `Search page of ${ name }`,
  };
}



export default async function Page({ searchParams }: { searchParams: { keyword: string }}) {

  return (
    <div className="container py-5">
      <div className="py-5">
        <div className="row mb-5 justify-content-center">
          <div className="col-xs-8 col-md-6">
            <SearchForm />
          </div>
        </div>
        <h1 className="heading mb-5">Search{searchParams?.keyword ? ` "${searchParams?.keyword}"` : ""}</h1>

        <Suspense fallback={<Loading />}>
          <SearchResult keyword={ searchParams?.keyword } />
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