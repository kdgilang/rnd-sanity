import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Search from "../components/Search";
import getSearchService from "../services/getSearchService";
import getSiteSettingsService from "../services/getSiteSettingsService";

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

export default async function PageNotFound({ searchParams }) {
  const data = await getData(searchParams?.keyword)

  return (
    <>
      <div className="container py-5">
        <div className="section-padding">
          <div className="row mb-5 justify-content-center">
            <div className="col-xs-8 col-md-6">
              <Search />
            </div>
          </div>
          <h1 className="heading mb-5">Search{searchParams?.keyword ? ` "${searchParams?.keyword}"` : ""}</h1>
          <div className="row">
            <Suspense fallback={<p>Loading...</p>}>
              {data?.map(item => {
                const dataString = new Date(item.createdAt).toLocaleDateString('en-US')
                return <div key={item.id} className="col-12 col-xl-6">
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                      <Image src="" className="card-img" alt="" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{ item.title }</h5>
                          <p className="card-text">{ item.content }</p>
                          <p className="card-text"><small className="text-muted">{ dataString }</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}