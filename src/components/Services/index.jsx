import React from 'react'
import Card from './Card'
import styles from './services.module.css'
export default function services() {
  return (
    <div className={styles.services}>
        <Card heading="Men" content=" Polo Shirt, Sports wears, Sleeve Less, Sweatshirts, Hoodies, Varsity jackets etc"/>
        <Card heading="women" content="Tank tops, Hoodies, T-shirts, Polo shirts, Maternity Tees, Crop tops, Ringer Tees, Formal Shirts"/>
        <Card heading="kids" content="Rompers, Hoodies, Bibs, Blanket, T-shirts, Polo Shirts, Raglan full sleeve Tees for kids & babies"/>
        <Card heading="Corporate" content="Uniform T-shirt, Promotional Mugs, sipper bottle, caps, Bags, pillows, Mousepad, Stationeries, Key Chains etc"/>
    </div>
  )
}
