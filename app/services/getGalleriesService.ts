import { GET_GALLERIES_LIMIT_API_URL } from "../consts/apiPath";
import fetchData from "../providers/cmsProvider";

export default async function getGalleriesService(limit: number = -1) {
  return fetchData({
    url: `${GET_GALLERIES_LIMIT_API_URL}/${limit}`,
    method: 'GET',
    cache: 'force-cache',
  })
}