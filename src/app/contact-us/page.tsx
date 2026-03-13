import ContactUsView from '@/component/ContactUsView'
import Footer from '@/component/Footer'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Stranger Together',
  description: 'Get in touch with us to plan your next travel adventure.',
}

function ContactUsPage() {
  return (
    <>
      <ContactUsView />
      <Footer />
    </>
  )
}

export default ContactUsPage