import React ,{useState} from 'react'
import styles from './card.module.css'
import OrderOurProduct from '../OrderOurProduct/index.jsx';
import { useDispatch } from 'react-redux';
import { setOrder } from '../../redux/designs/orderSlice';

export default function Card({img, desc, id}) {
  const dispatch = useDispatch();

  function handelClick(img, desc, id){
    dispatch(setOrder({
      img : img,
      desc : desc,
      id : id
    }));
  }

  return (
      <div className={styles.card} >
      <div className={styles.image} >
      <img id={id} onClick={()=>{handelClick(img, desc, id)}} style={{height:'100%', width:'100%'}} src={img} alt="img..." />
      </div>
      <div className={styles.description}>{desc}</div>
      </div>
  )
}