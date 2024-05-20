import React from 'react'

const navbar3 = {
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    position:'sticky',
    top:'0',
    zIndex:'10'
}

const navImg = {
    height:'inherit'
}
export default function Navbar3() {
  return (
    <div style={navbar3}>
      <img style={navImg} src="../src/assets/banner2.png" alt="img..." />
    </div>
  )
}
