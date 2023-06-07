'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"

export default function SearchForm() {
  const router = useRouter()
  const params = useSearchParams()
  
  const [keyword, setKeyword] = useState(params.get('keyword') || '')

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    router.push(`/search?keyword=${keyword}`)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="get">
      <div className="input-group mb-3">
        <input
          type="search"
          name="keyword"
          className="form-control"
          aria-describedby="basic-addon2"
          placeholder="Search..."
          aria-label="Search title or content"
          onChange={ (e) => setKeyword(e.target.value) }
          value={keyword} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary bg-primary" type="submit">Search</button>
        </div>
      </div>
    </form>
  )
}