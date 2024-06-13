import React from 'react'
import styles from './teamMember.module.css'
export default function index({heading, img, intro}) {
    return (
        <div className={styles.members}>
            <div className={styles.role}>
                <div className={styles.infoContainer}>
                    <h2 className={styles.heading}>{heading}</h2>
                    <div className={styles.info}>
                        <img className={styles.image} src={img} alt="simranJazz..." />
                        <p>{intro}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
