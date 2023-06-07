export async function GET(req: any) {
    req.setPreviewData({})
    req.writeHead(307, {Location: '/'})
    req.end()
  }
    
  export async function POST(res: any) {
    res.setPreviewData({})
    res.writeHead(307, {Location: '/'})
    res.end()
  }