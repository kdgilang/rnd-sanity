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
                const url = `${item?.type === 'page' ? "" : "/galleries"}/${item?.slug}`
                return <div key={item.id} className="col-12 col-xl-6">
                  <Link href={url} className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                      <Image src={item?.image?.formats?.medium?.url} className="card-img" alt={item.title} width={200} height={150} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="mb-2">
                            { item.title }
                          </h5>
                          <span class="badge bg-primary mr-2 display-inline-block">{ item.type }</span>
                          <small className="text-muted">{ dataString }</small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              })}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}