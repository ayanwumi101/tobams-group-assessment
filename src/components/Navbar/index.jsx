import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import NavLinks from './subpages/NavLinks'
import './index.css'
import NavInput from './subpages/NavInput'
import NavIconButtons from './subpages/NavIconButtons'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const index = () => {
    const [navbar, setNavbar] = useState(false)
  return (
    <section className='nav-container'>
    {navbar ? <SideNav setNavbar={setNavbar} /> : null}
    <nav>
              <section className='logo-container'>
                  <img src={Logo} alt="Rare eats logo" />
              </section>
              <section className='nav-links-container'>
                  <NavLinks />
              </section>
              <section className='nav-input-container'>
                  <NavInput />
              </section>
              <section className='nav-icon-buttons-container'>
                  <NavIconButtons />
              </section>
              <section className='icon-container'>
                  <FaBars className='icon' onClick={() => setNavbar(true)} />
              </section>
    </nav>
    </section>
  )
}

export default index


export const SideNav = ({setNavbar}) => {
    return (
        <nav>
            <div className="sidenav-modal">
                <div className='sidenav-container'>
                    <button className='sidenav-btn' onClick={() => setNavbar(false)}><AiOutlineClose className='close-icon' /></button>
                    <ul className='sidenav-links'>
                        <li>Store</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <section>
                        <NavInput />
                    </section>
                    <section>
                        <NavIconButtons />
                    </section>
                </div>
            </div> 
        </nav>
    )
}