import { GET_PAGES_API_URL } from "../../app/consts/apiPath";
import fetchData from "../../app/providers/cmsProvider";

export default async function getPagesService() {
  return fetchData({
    url: GET_PAGES_API_URL,
    method: 'GET',
    cache: 'force-cache'
  })
}