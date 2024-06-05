import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
// import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';

export default function Navbarcontainer({isOpen, setOpen}) {
    const location = useLocation();
  return (
    <>
    {location.pathname === '/product' ? <Navbar3/> : <Navbar isOpen={isOpen} setOpen={setOpen}/>}
    </>
  )
}
