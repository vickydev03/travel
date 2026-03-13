import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tours',
  description: 'View all our available tours and group trips.',
  alternates: {
    canonical: '/tour',
  },
}
function page() {
  return (
    <div>page</div>
  )
}

export default page