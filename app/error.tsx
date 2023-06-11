'use client'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '503',
  description: 'Site under maintenance',
}

export default function Error() {
  return (
    <>
      <div className="container py-5 bg-grey">
        <div className="text-center section-padding">
          <div className="inner-content">
            <h1 className="heading">503</h1>
            <p>Site under maintenance, please try again later.</p>
          </div>
        </div>
      </div>
    </>
  )
}