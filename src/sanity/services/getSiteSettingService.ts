import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import SiteSettingModel from "@sanity/models/SiteSettingModel";

const query = groq`*[_type == "siteSetting"][0]{
  ...,
  "image": image.asset->{
    _id,
    url,
    _type,
    title,
    altText,
    description,
    "tags": opt.media.tags[]->name.current
  }
}`;

export default async function getSiteSettingsService(): Promise<SiteSettingModel>  {
  return client.fetch(query, {
    cache: 'force-cache',
    next: { revalidate: 60 }
  });
}