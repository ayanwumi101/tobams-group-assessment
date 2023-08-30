import React from 'react'
import '../index.css'
import logo from '../../../assets/logo.svg'

const Profile = () => {
  return (
    <section className='profile-container'>
        <section>
              <div className='logo-container'>
                  <img src={logo} alt="rare eat logo" />
              </div>  
              <div>
                <p>
                      RARE EAT FRESH represents a range of unique ingredients and the vibrancy of different Cultures, every product 
                      in the Rare Eat range has a story inspired by different Cultures
                </p>
                <p className='contact'>020 7205 4031</p>
                <p className='contact'>support@rareeatfresh.com</p>
              </div>          
        </section>
        
    </section>
  )
}

export default Profile