import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { SocailMediaSettingModel } from '@sanity/models/SocialMediaSettingModel';

const query = groq`*[_type == "socialMediaSetting"][0]`;

export default async function getSocialMediaSettingService(): Promise<SocailMediaSettingModel>  {
  return client.fetch(query, {
    cache: 'force-cache',
    next: { revalidate: 60 }
  });
}