import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import ContactForm from '../../components/ContactForm'

const index = () => {
  return (
    <section>
        <Navbar />
        <ContactForm />
        <Newsletter />
        <Footer />
    </section>
  )
}

export default index