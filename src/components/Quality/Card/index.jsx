import styles from './card.module.css';

import React from 'react'

export default function index({img, heading, content}) {
  return (
    <div className={styles.card}>
        <div className={styles.cardContainer}>
        <img className={styles.image} src={img} alt="image..." />
        <div className={styles.text}>
        <h2>{heading}</h2>
        <p>{content}</p>
        </div>
        </div>
    </div>
  )
}
