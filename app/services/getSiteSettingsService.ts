import { GET_SETTINGS_API_URL } from "../consts/apiPath";
import fetchData from "../providers/cmsProvider";
import { groq } from 'next-sanity';
import { client } from "@sanity/lib/client";
import SisteSettingModel from "@sanity/models/SiteSettingModel";

const query = groq`*[_type == "siteSetting"][0]`;

export default async function getSiteSettingsService(): Promise<SisteSettingModel>  {
  const res: SisteSettingModel = await client.fetch(query);

  return res;
}