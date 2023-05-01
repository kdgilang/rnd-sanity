import { GET_GALLERIES_API_URL } from "../consts/apiPath";
import fetchData from "../providers/cmsProvider";

export default async function getGalleryBySlugService(slug: string) {
  return fetchData({
    url: `${GET_GALLERIES_API_URL}/${slug}`,
    method: 'GET',
    cache: 'force-cache'
  })
}