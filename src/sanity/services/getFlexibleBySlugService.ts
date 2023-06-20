import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import FlexibleContentModel from '@sanity/models/FlexibleContentModel';

export const queryFlexibleBySlug = groq`*[_type == "flexibleContent" && slug.current == $slug][0]{
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
  sections[]{
    ...,
    component->{
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
      link{
        ...,
        ref->{ slug, _type, _id }
      },
      carouselItems[]{
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
        link{
          ...,
          ref->{ slug, _type, _id }
        }
      },
      cards[]->{
        _id,
        _type,
        name,
        slug,
        icon,
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
        description,
        networkItems,
        categories[]->{ title, slug, _type, _id },
        link{
          ...,
          ref->{ slug, _type, _id }
        }
      }
    },
    categories[]->{ title, slug, _type, _id }
  }
}`;

export function getFlexibleBySlugService(slug: string): Promise<FlexibleContentModel> {

  const queryParams = { slug };

  return client.fetch(queryFlexibleBySlug, queryParams);
}