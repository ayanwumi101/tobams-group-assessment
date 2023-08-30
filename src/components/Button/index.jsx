import React from 'react'

const index = ({text, width, color, bgColor, padding}) => {
  return (
    <section style={{width: width, backgroundColor: bgColor, borderRadius: 32, cursor: 'pointer'}}>
      <button style={{ width: '100%', background: 'none', border: 'none', color: color, padding: padding, }}>{text}</button>
    </section>
  )
}

export default index