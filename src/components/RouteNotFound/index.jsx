import React from 'react'
import styles from './routeNotFound.module.css'
export default function RouteNotFound() {
  return (
    <div className={styles.routeNotFound}>
        <div className={styles.container}>
        <div className={styles.errorMessage}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <button className={styles.backBtn}>
        <a href="/">Back to Home</a>
        </button>
        </div>
        </div>
    </div>
  )
}
