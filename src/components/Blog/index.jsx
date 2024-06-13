import React from 'react'
import styles from './blog.module.css'
import MouseParallax from '../../components/MouseParallax/index'
export default function index() {
  return (
    <div className={styles.blog}>
        <MouseParallax/>
        <MouseParallax/>
    </div>
  )
}
