'use client'

import Image from "next/image";
import Link from "next/link";
import { BasePropsType } from "../types/BasePropsType";
import { BaseContentModel } from "@sanity/models/BaseModel";
import { urlForImage } from "@sanity/lib/image";
import "src/app/helpers/toStringDate"
import { internalLinkBuilder } from "@sanity/lib/link";

type ListTileType = BasePropsType & {
  data: BaseContentModel[]
}

export default function ListTile({ data }: ListTileType) {

  return (
    <div className="row">
      { data?.map(item => {
        const dateString = item?._createdAt?.toStringDate()
        return <div key={item._id} className="col-12 col-xl-6">
          <Link href={internalLinkBuilder(item.slug.current, item._type)} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
              <Image src={urlForImage(item.image).size(680, 480).url()} className="card-img" alt={item.title} width={200} height={150} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="mb-2">
                    { item.title }
                  </h5>
                  <span className="badge bg-primary mr-2 display-inline-block">{ item._type }</span>
                  <small className="text-muted">{ dateString }</small>
                  <p className="text-truncate mt-2 mb-0"><small>{ item.description }</small></p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      })}
    </div>
  )
}