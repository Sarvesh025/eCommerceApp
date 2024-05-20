import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';

export default function Navbarcontainer() {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <>
    {location.pathname === '/product' ? <Navbar3/> : <Navbar/>}
    </>
  )
}
