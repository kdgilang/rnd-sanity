"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function ModalSearch() {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    router.push(`/search?keyword=${keyword}`)
  }

  return (
    <div className="top-search-area">
      <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  aria-label="close search modal"
                  className="btn fa fa-close btn-close-modal d-block text-white position-absolute"
                  style={{ fontSize: 30, right: 10, top: -40 }}>
                </button>
                  <div className="modal-body">
                    <form onSubmit={(e) => handleSubmit(e)} method="get">
                      <input
                        type="search"
                        name="keyword"
                        className="form-control"
                        placeholder="Search and hit enter..." 
                        onChange={ (e) => setKeyword(e.target.value) }
                        value={keyword} />
                      <button type="submit">Search</button>
                    </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}