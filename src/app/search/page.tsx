import Image from "next/image";
import Link from "next/link";

export default function PageNotFound({ searchParams }) {
  return (
    <>
      <div className="container py-5">
        <div className="section-padding">
          <h1 className="heading mb-4">Search result for: {searchParams?.keyword}</h1>
          <div className="row">
            <div className="col-xl-6">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                  <Image src="" className="card-img" alt="" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}