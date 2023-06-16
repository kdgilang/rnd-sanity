import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import SiteSettingModel from "@sanity/models/SiteSettingModel";

const query = groq`*[_type == "siteSetting"][0]`;

export default async function getSiteSettingsService(): Promise<SiteSettingModel>  {
  return client.fetch(query, {
    cache: 'force-cache',
    next: { revalidate: 60 }
  });
}