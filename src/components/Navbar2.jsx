import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const nav = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems:'center',
  height:'5vh',
  background:'black',
  position:'sticky',
  top:'0',
  zIndex:'100'
}

export default function Navbar2() {
  const location = useLocation();
  return (
    <div style={nav}>
      <Link to='/account' style={location.pathname === '/account' ? {color:'#646cff'} : {color: 'white'}}>Account</Link>
      <Link to='/upload' style={location.pathname === '/upload' ? {color:'#646cff'} : {color: 'white'}}>Upload</Link>
      <Link to='/orders' style={location.pathname === '/orders' ? {color:'#646cff'} : {color: 'white'}}>Orders</Link>
      <Link to='/wishlist' style={location.pathname === '/wishlist' ? {color:'#646cff'} : {color: 'white'}}>Wishlist</Link>
      <Link to='/notifications' style={location.pathname === '/notifications' ? {color:'#646cff'} : {color: 'white'}}>Notification</Link>
    </div>
  )
}
