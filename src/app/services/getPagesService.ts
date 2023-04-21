import { GET_PAGES_API_URL } from "../consts/apiPath";
import fetchData from "../providers/cmsProvider";

export default async function getPagesService() {
  return fetchData({
    url: GET_PAGES_API_URL,
    method: 'GET',
    cache: 'force-cache'
  })
}