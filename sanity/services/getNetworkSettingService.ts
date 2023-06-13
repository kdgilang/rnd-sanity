import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import { NetworkSettingModel } from '@sanity/models/NetworkSettingModel';

const query = groq`*[_type == "networkSetting"][0]`;

export default async function getNetworkSettingService(): Promise<NetworkSettingModel>  {
  return client.fetch(query, {
    cache: 'force-cache',
    next: { revalidate: 60 }
  });
}