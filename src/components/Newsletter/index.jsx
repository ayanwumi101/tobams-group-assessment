import React from 'react'
import './index.css'
import Input from '../Input'
import Button from '../Button'

const index = () => {
  return (
    <section className='newsletter-container'>
          <h2>Join Our Newsletter: Stay Connected, Savor Exclusives!</h2>
          <section>
              <p>Subscribe to our newsletter and be a part of the vibrant Rare Eat Fresh community. Stay connected with the latest updates, exclusive offers, and exciting promotions on rare West African food ingredients.</p>
          </section>

          <section className='action-btns-container'>
            <Input 
            type="email" 
            placeholder='Email address' 
            width='350px' 
            bgColor='transparent' 
            border='1px solid black' 
            padding='15px 20px' 
           />
            <Button text='subscribe' bgColor='#F36F00' width='220px' padding='16px' />
          </section >
    </section>
  )
}

export default index