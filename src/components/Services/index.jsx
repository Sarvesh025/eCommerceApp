import React, { useEffect } from 'react'
import Card from './Card'
import styles from './services.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function services() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);
  return (
    <div className={styles.services}>
        <Card scrollAnimation="fade-down-right" heading="Men" content=" Polo Shirt, Sports wears, Sleeve Less, Sweatshirts, Hoodies, Varsity jackets etc"/>
        <Card scrollAnimation="fade-down-left" heading="women" content="Tank tops, Hoodies, T-shirts, Polo shirts, Maternity Tees, Crop tops, Ringer Tees, Formal Shirts"/>
        <Card scrollAnimation="fade-up-right" heading="kids" content="Rompers, Hoodies, Bibs, Blanket, T-shirts, Polo Shirts, Raglan full sleeve Tees for kids & babies"/>
        <Card scrollAnimation="fade-up-left" heading="Corporate" content="Uniform T-shirt, Promotional Mugs, sipper bottle, caps, Bags, pillows, Mousepad, Stationeries, Key Chains etc"/>
    </div>
  )
}
