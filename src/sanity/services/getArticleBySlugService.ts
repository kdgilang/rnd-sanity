import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import ArticleContentModel from '@sanity/models/ArticleContentModel';

export const queryArticleBySlug = groq`*[_type == "articleContent" && slug.current == $slug][0]{
  ...,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }
}`;

export function getArticleBySlugService(slug: string): Promise<ArticleContentModel> {

  const queryParams = { slug };

  return client.fetch(queryArticleBySlug, queryParams);
}