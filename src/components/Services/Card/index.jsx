import React from 'react'
import styles from './card.module.css'

export default function card({image, heading, content}) {
  return (
    <div className={styles.card}>
        <img src={image} alt="image..."  className={styles.img}/>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.content}>{content}</p>
    </div>
  )
}
