import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <div className="container py-5 bg-grey">
        <div className="text-center section-padding">
          <div className="inner-content">
            <h1 className="heading">404</h1>
            <p>page not found.</p>
            <Link href="/" className="btn alime-btn mt-4" style={{ color: '#333'}}>Go Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}