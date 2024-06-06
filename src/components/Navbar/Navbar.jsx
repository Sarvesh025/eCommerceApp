import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import 'remixicon/fonts/remixicon.css'
import { RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom'
import Menu from '../Menu'

export default function Navbar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  useEffect(() =>{
    setIsMobile(window.innerWidth);
  },[]);

  function handelMenu(){
    return(
      <Menu/>
    )
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.info}>
        <img className={styles.logo} src="/assets/tslogo.png" alt="logo" />
        {/* <div>
            <button>Login</button>
        </div> */}
      </div>
      {
        isMobile > 786 ? 
        <div className={styles.route}>
       <Link to='/' style={location.pathname === '/' ? {color:'#646cff'} : {color: 'white'}}><h3>Home</h3></Link>
       <Link to='/contact' style={location.pathname === '/contact' ? {color:'#646cff'} : {color: 'white'}}><h3>Contact</h3></Link>
       <Link to='/about'style={location.pathname === '/about' ? {color:'#646cff'} : {color: 'white'}}><h3>About</h3></Link>
        {/* <h3><i className="ri-shopping-cart-2-line"/></h3> */}
      </div>
      :
        <RiMenu3Line className={styles.menu} size={50} onClick={handelMenu}/>
      }
    </div>
  )
}
