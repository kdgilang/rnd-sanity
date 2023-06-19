import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { BaseContentModel } from '@sanity/models/BaseModel';

export const queryFilter = groq`*[_type == $type][$index...$limit]{
  _id,
  _type,
  _createdAt,
  slug,
  image,
  title,
  description,
  categories[]->{ title, slug, _type, _id }
}`;

export function getContentsByFilterService({ limit, type, index = 0 }: 
    { limit: number, type: string, index?: number }): Promise<BaseContentModel[]> {

  const queryParams = { index, limit, type };

  return client.fetch(queryFilter, queryParams);
}