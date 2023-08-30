import React from 'react'

const index = ({type, width, placeholder, border, padding, height, bgColor}) => {
  return (
    <section style={{width: width}} className='input'>
      <input type={type} placeholder={placeholder} style={{ width: '100%', padding: padding, border: border, height: height, backgroundColor: bgColor, color: 'black', borderRadius: '50px', outline: 'none' }} />
    </section>
  )
}

export default index