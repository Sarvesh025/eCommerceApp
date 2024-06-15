import React from 'react'
import styles from './card.module.css';

export default function index({ title, description, thumbnail}) {
  return (
    <div className={styles.blogCard} >
    <img src={thumbnail} className={styles.blogCardImg} alt="thumbnail"/>
    <div className={styles.blogDetails}>
      <h1 className={styles.blogTitle}>{title}</h1>
      <p className={styles.blogDesc}>{description}</p>
      <button className={styles.blogButton}>Read more </button>
    </div>
  </div>
  )
}
