
import AboutUsView from '@/component/AboutUsView'
import Footer from '@/component/Footer'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Stranger Together, our mission, and our team of travel enthusiasts.',
  alternates: {
    canonical: '/about-us',
  },
}
function page() {
  return (
    <>
    <AboutUsView/>
    <Footer/>
    </>
  )
}

export default page