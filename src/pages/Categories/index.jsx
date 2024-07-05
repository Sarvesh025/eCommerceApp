import React from 'react'
import styles from './categories.module.css'
import Card from '../../components/Card'
import { useLocation } from 'react-router-dom'

export default function Catagories() {
    const location = useLocation();
    const data = location.state.data;  // assuming data is an array of objects with 'name' and 'description' properties.
    const title = location.state.title;
  return (
    <div className={styles.categories}>
      <h1 className={styles.title}>{title}</h1>
    <div className={styles.products}>
       {
         data &&
         data.map((element)=>(
           <Card data={element} />  // assuming data is an array of objects with 'name' and 'description' properties.
           ))
          }
    </div>
    </div>
  )
}
