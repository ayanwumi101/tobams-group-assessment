import React from 'react'
import Profile from './subpages/Profile'
import ContactForm from './subpages/ContactForm'
import './index.css'

const index = () => {
  return (
    <section className='contact-form-container'>
        <div className='contact-form-sub-container'>
            <Profile />
            <ContactForm />
        </div>
    </section>
  )
}

export default index