'use client'

import Image from "next/image";
import Link from "next/link";

export default async function CardList({ data }) {

  return (
    <div className="row">
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
                  <span className="badge bg-primary mr-2 display-inline-block">{ item.type }</span>
                  <small className="text-muted">{ dataString }</small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      })}
    </div>
  )
}