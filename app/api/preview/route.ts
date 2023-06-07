import { redirect } from "next//navigation"

export async function GET(req: any) {
  // req.setPreviewData({})
  // req.writeHead(307, {Location: '/'})
  // req.end()
  return new Response('Hello, Next.js!', {
    status: 307,
    headers: {
      location: '/',
    },
  });
}