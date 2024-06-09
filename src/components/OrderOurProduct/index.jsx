import React, { useState, useEffect } from 'react'
import styles from './orderOurProduct.module.css'

export default function index({ img, desc, id, open, setShow }) {

    const handelClose = () => {
        setShow(false);
    }
    const handelOrder = () => {
        
    }
    return (
        <div className={styles.orderOurProduct}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={img} alt="image..." style={{width:'100%', height:'100%'}}/>
                </div>
                <div className={styles.details}>
                    <h2 className={styles.heading}>Please Provide Your Details!</h2>
                    <div className={styles.form}>

                    <div>
                        <label htmlFor="">Select your size with required pieces!</label>
                        <div className={styles.sizeContainer}>
                    <input className={styles.inputSize} type="number" placeholder='S' />
                    <input className={styles.inputSize} type="number" placeholder='M' />
                    <input className={styles.inputSize} type="number" placeholder='L' />
                    <input className={styles.inputSize} type="number" placeholder='XL' />
                        </div>
                    </div>
                    <div className={styles.inputBoxes}>
                        <label htmlFor="phone">Phone :</label>
                            <input type="number" className={styles.inputNum} placeholder='Enter your phone no.'/>
                    </div>
                    <div className={styles.inputBoxes}>
                        <label htmlFor="phone">Landmark :</label>
                            <input type="text" className={styles.inputNum} placeholder='Enter Landmark'/>
                    </div>
                    <div className={styles.inputBoxes}>
                        <label htmlFor="phone">Pincode :</label>
                            <input type="number" className={styles.inputNum} placeholder='Enter valid pincode'/>
                    </div>
                    <div className={styles.inputBoxes}>
                        <label htmlFor="address">Address :</label>
                        <textarea name="address" id="address" className={styles.inputNum} cols="30" rows="5" ></textarea>
                    </div>
                    </div>
                    <div className={styles.actionBtn}>
                    <button onClick={handelClose}>Cancel</button>
                    <button onClick={handelOrder}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
