import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link, useLocation } from 'react-router-dom'

const navbar = {
    height:'12vh',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#3a3b3c'
}

const info = {
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid',
    width: '20%',
    justifyContent: 'space-around'
}

const route = {
    width: 'calc(100% - 50%)',
    // border: '1px solid',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const logo = {
  height:'8vh'
}

export default function Navbar() {
  const location = useLocation();
  return (
    <div style={navbar}>
      <div style={info}>
        <img style={logo} src="../src/assets/tslogo.png" alt="" />
        <div>
            <button>Login</button>
        </div>
      </div>
      <div style={route}>
       <Link to='/' style={location.pathname === '/' ? {color:'#646cff'} : {color: 'white'}}><h3>Home</h3></Link>
       <Link to='/contact' style={location.pathname === '/contact' ? {color:'#646cff'} : {color: 'white'}}><h3>Contact</h3></Link>
       <Link to='/about'style={location.pathname === '/about' ? {color:'#646cff'} : {color: 'white'}}><h3>About</h3></Link>
        <h3><i className="ri-shopping-cart-2-line"/></h3>
      </div>
    </div>
  )
}
