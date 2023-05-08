"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ModalSearch() {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?keyword=${keyword}`)
  }

  return (
    <div className="top-search-area">
      <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                  <div className="modal-body">
                    <button type="button" className="btn close-btn" data-dismiss="modal"><i className="ti-close"></i></button>
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