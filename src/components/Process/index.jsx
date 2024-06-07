import React from 'react'
import styles from './process.module.css'
import Card from './Card'

export default function index() {
  return (
    <div className={styles.process}>
        <div className={styles.image}></div>
        <Card heading="Own Manufacturing" content="Own Manufacturing
T-Shirts With Your Fit And Style For Men,Women,Kids Choose From 50+ Shades Of Color Fabrics" position={{top:'0', left:'0'}}/>
        <Card heading="Screen Printing" content="High Quality Screen Printing For Best Prints. No Minimums. Foil, Rubber, Discharge, Glow In Dark & Puff Printing Etc" position={{bottom:'0', left:'0'}}/>
        <Card heading="Digital Printing" content="Direct To Film, Sublimation, DTG Print Effective For Small Orders With Gradient Designs Or More Than 8 Solid Colors." position={{bottom:'0', right:'0'}}/>
        <Card  heading="Logo Embroidery" content="Polo T Shirts Embroidery From Single Tee. Embroidery Logo Uniform T-Shirts In Chennai" position={{top:'0', right:'0'}}/>
    </div>
  )
}
