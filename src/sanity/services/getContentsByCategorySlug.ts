import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { BaseContentModel } from '@sanity/models/BaseModel';

export const queryCategory = groq`*[(_type == "articleContent" || _type == "flexibleContent") && $slug in categories[]->slug.current][]{
  _id,
  _type,
  _createdAt,
  slug,
  image,
  title,
  description
}`;

export function getContentsByCategorySlug(slug: string = ""): Promise<BaseContentModel[]> {
  const queryParams = { slug };

  return client.fetch(queryCategory, queryParams);
}