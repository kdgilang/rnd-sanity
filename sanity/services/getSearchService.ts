import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { BaseDocumentModel } from '@sanity/models/BaseModel';

export const querySearch = groq`*[_type == "flexibleContent" || _type == "articleContent" && [lower(title), lower(description), lower(body)] match $keyword][]{
  _id,
  _type,
  _createdAt,
  slug,
  image,
  title,
  description
}`;

export function getSearchService(keyword: string = ""): Promise<BaseDocumentModel[]> {
  const queryParams = { keyword };

  return client.fetch(querySearch, queryParams);
}