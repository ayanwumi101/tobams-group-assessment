import React from 'react'
import logo from '../../assets/logo.svg'
import './index.css'

const index = () => {
  return (
    <section className='footer-container'>
      <section className="sub-container">

        <div className='footer-logo'>
          <img src={logo} alt="rare eat logo" />
        </div>
        
        <section className='footer-links-container'>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Store</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Returns and Refunds</li>
              <li>Cookies</li>
            </ul>
          </div>

          <div>
            <h4>Need Help?</h4>
            <ul>
              <li>Track Order</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>support@rareeatfresh.com</li>
              <li>089844875773</li>
              <li>International House, 64 Nile Street</li>
            </ul>
          </div>
        </section>

        <div className="thin-line"></div>

        <section className='copywright'>
          <p>Copyright &copy; 2023 Rare Eat Fresh. All rights reserved.</p>
        </section>

      </section>
    </section>
  )
}

export default index