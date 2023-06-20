import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { BaseContentModel, BaseDocumentModel } from '@sanity/models/BaseModel';

export const querySearch = groq`*[(_type == "articleContent" || _type == "flexibleContent") && [lower(title), lower(description), lower(pt::text(body))] match $keyword][]{
  _id,
  _type,
  _createdAt,
  slug,
  "image": image.asset->{
    _id,
    url,
    _type,
    title,
    altText,
    description,
    "tags": opt.media.tags[]->name.current
  },
  title,
  description
}`;

export function getSearchService(keyword: string = ""): Promise<BaseContentModel[]> {
  const queryParams = { keyword };

  return client.fetch(querySearch, queryParams);
}