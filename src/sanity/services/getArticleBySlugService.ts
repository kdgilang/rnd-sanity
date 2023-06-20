import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import ArticleContentModel from '@sanity/models/ArticleContentModel';

export const queryArticleBySlug = groq`*[_type == "articleContent" && slug.current == $slug][0]{
  ...,
  "image": image.asset->{
    _id,
    url,
    _type,
    title,
    altText,
    description,
    "tags": opt.media.tags[]->name.current
  },
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  categories[]->{ title, slug, _type, _id }
}`;

export function getArticleBySlugService(slug: string): Promise<ArticleContentModel> {

  const queryParams = { slug };

  return client.fetch(queryArticleBySlug, queryParams);
}