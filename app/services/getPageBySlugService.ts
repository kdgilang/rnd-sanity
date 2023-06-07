import { GET_PAGES_API_URL } from "../consts/apiPath";
import fetchData from "../providers/cmsProvider";

export default async function getPageBySlugService(slug: string) {
  return fetchData({
    url: `${GET_PAGES_API_URL}/${slug}`,
    method: 'GET',
    cache: 'force-cache'
  })
}