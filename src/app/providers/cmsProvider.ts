import { API_KEY, SITE_ID } from "../consts/config";

export type FetchType = {
  url: string
  method: string
  data?: any
  cache: RequestCache
}

export default async function fetchData({url, method, cache, data}: FetchType) {
  const res = await fetch(url,
    {
      method,
      cache,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'site-id': `${SITE_ID}`
      },
      body: data && method === 'POST' ? JSON.parse(data) : undefined,
    } 
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed fetch data.');
  }
  
  return res.json()
}