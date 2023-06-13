import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import FlexibleContentModel from '@sanity/models/FlexibleContentModel';
import { usePreview } from '@sanity/lib/preview';

export const queryOneFlexible = groq`*[_type == "flexibleContent" && slug.current == $slug][0]{
  ...,
  sections[]{
    ...,
    component->{
      ...,
      cta{
        ...,
        link->{ menuName, slug, _type, _id }
      },
      cards[]->{
        _id,
        _type,
        name,
        slug,
        icon,
        image,
        title,
        description,
        networkItems,
        categories[]->{ menuName, slug, _type, _id }
      }
    },
  }
}`;

export function getOneFlexibleService(slug: string): Promise<FlexibleContentModel> {

  const queryParams = { slug };

  return client.fetch(queryOneFlexible, queryParams);
}