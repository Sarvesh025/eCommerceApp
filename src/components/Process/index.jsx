import React, { useEffect } from 'react'
import styles from './process.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function index() {
  useEffect(() =>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <div className={styles.processContainer}>
      <div className={styles.intro}>
      <h1 style={{fontFamily:'math'}} data-aos="zoom-in">Key Feature</h1>
      <h3 data-aos="fade-right">No Quality Restrictions</h3>
      </div>
    <div className={styles.process}>
        <div className={styles.image}></div>
        <Card scrollAnimation="flip-down" heading="Own Manufacturing" content="Own Manufacturing T-Shirts With Your Fit And Style For Men,Women,Kids Choose From 50+ Shades Of Color Fabrics" position={{top:'0', left:'0'}}/>
        <Card scrollAnimation="flip-down" heading="Screen Printing" content="High Quality Screen Printing For Best Prints. No Minimums. Foil, Rubber, Discharge, Glow In Dark & Puff Printing Etc" position={{bottom:'0', left:'0'}}/>
        <Card scrollAnimation="flip-down" heading="Digital Printing" content="Direct To Film, Sublimation, DTG Print Effective For Small Orders With Gradient Designs Or More Than 8 Solid Colors." position={{bottom:'0', right:'0'}}/>
        <Card scrollAnimation="flip-down" heading="Logo Embroidery" content="Polo T Shirts Embroidery From Single Tee. Embroidery Logo Uniform T-Shirts In Chennai" position={{top:'0', right:'0'}}/>
    </div>
    </div>
  )
}
