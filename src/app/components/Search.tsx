"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Search() {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?keyword=${keyword}`)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="get">
      <div class="input-group mb-3">
        <input
          type="search"
          name="keyword"
          className="form-control"
          aria-describedby="basic-addon2"
          placeholder="Search..."
          aria-label="Search title or content"
          onChange={ (e) => setKeyword(e.target.value) }
          value={keyword} />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
    </form>
  )
}