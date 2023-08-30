import React from 'react'
import flagIcon from '../../../assets/flag.svg'
import cartIcon from '../../../assets/cart.svg'
import userIcon from '../../../assets/user.svg'
import arrowDownIcon from '../../../assets/arrow-down.svg'
import '../index.css'

const NavIconButtons = () => {
  return (
    <section className='nav-icon-buttons-container'>
        <section className='flag-icon-container'>
            <img src={flagIcon} alt="picture of UK flag" />
        </section>
        <section>
            <img src={cartIcon} alt="cart icon" />
        </section>
        <section className='user-icon-button'>
            <img src={userIcon} alt="user icon" />
            <img src={arrowDownIcon} alt="arrow down icon" />
        </section>
    </section>
  )
}

export default NavIconButtons