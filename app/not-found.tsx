import Link from "next/link";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404',
  description: 'Page not found',
}

export default function PageNotFound() {
  return (
    <>
      <div className="container py-5 bg-grey">
        <div className="text-center section-padding">
          <div className="inner-content">
            <h1 className="heading">404</h1>
            <p>Page not found.</p>
            <Link href="/" className="btn alime-btn mt-4" style={{ color: '#333'}}>Go Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}