import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { BaseContentModel, BaseDocumentModel } from '@sanity/models/BaseModel';

export const querySearch = groq`*[(_type == "articleContent" || _type == "flexibleContent") && [lower(title), lower(description), lower(pt::text(body))] match $keyword][]{
  _id,
  _type,
  _createdAt,
  slug,
  image,
  title,
  description
}`;

export function getSearchService(keyword: string = ""): Promise<BaseContentModel[]> {
  const queryParams = { keyword };

  return client.fetch(querySearch, queryParams);
}