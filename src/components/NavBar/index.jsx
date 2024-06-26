
import styles from './navbar.module.css';
import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from 'hamburger-react';


export default function NavBar({ isOpen, setOpen }) {

  const location = useLocation();
  return (
    <div className={styles.navbar}>
      <div className={styles.background}>
        <img src="/assets/waves.svg" alt="waves" />
      </div>
      <div className={styles.content}>
      <div className={styles.info}>
        <img className={styles.logo} src="/assets/browserLogo.png" alt="logo" />
        {/* <div>
        <button>Login</button>
      </div> */}
      </div>
      <div className={styles.route}>
        <Link to='/' className={location.pathname === '/' ? styles.active : ''}><h3>HOME</h3></Link>
        <Link to='/contact' className={location.pathname === '/contact' ? styles.active : ''}><h3>CONTACT</h3></Link>
        <Link to='/about' className={location.pathname === '/about' ? styles.active : ''}><h3>ABOUT</h3></Link>
        {/* <h3><i className="ri-shopping-cart-2-line"/></h3> */}
      </div>
      <div className={styles.hamburgerCont}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      </div>
    </div>

  )
}
