import React from 'react'
import Input from '../../Input'
import Button from '../../Button'

const ContactForm = () => {
  return (
    <section className='form-container'>
       <section className='form-sub-container'>
              <header>
                  <h2>Get in touch</h2>
                  <p>Your Questions and Feedback Matter to Us - Reach Out, Let's Connect, and Explore
                      Together to Ensure Your Rare Eat Fresh Experience Is Exceptional and Delightful.
                  </p>
              </header>

              <form action="" className='form'>
                <div className='first-row'>
                    <Input type='text' bgColor='white' placeholder='First Name' border='none' width='280px' padding='15px 20px'  />
                    <Input type='text' bgColor='white' placeholder='Last Name' border='none' width='280px' padding='15px 20px' />
                </div>
                <div className='second-row'>
                    <Input type='email' bgColor='white' placeholder='Email Address' border='none' width='620px' padding='15px 20px' />
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <Button text='Send' color='white' bgColor='rgba(243, 111, 0, 1)' padding='17px' />
              </form>
       </section>
    </section>
  )
}

export default ContactForm