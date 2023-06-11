import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import RouteSettingModel from '@sanity/models/RouteSettingModel';

const query = groq`*[_type == "routeSetting"][0]{
  homePage->{ menuName, slug, _type },
  menu[]->{ menuName, slug, _type, _id }
}`;

export default async function getRouteSettingService(): Promise<RouteSettingModel> {
  const res = client.fetch(query, {
    cache: 'force-cache',
    next: { revalidate: 60 }
  });

  return res;
}