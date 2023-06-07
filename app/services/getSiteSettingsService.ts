import { GET_SETTINGS_API_URL } from "../consts/apiPath";
import fetchData from "../providers/cmsProvider";

export default async function getSiteSettingsService() {
  return fetchData({
    url: GET_SETTINGS_API_URL,
    method: 'GET',
    cache: 'force-cache'
  })
}