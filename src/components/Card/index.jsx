import React ,{useEffect, useState} from 'react'
import styles from './card.module.css'
import OrderOurProduct from '../OrderOurProduct/index.jsx';
import { useDispatch } from 'react-redux';
import { setOrder } from '../../redux/designs/orderSlice';

export default function Card({ data}) {
  const dispatch = useDispatch();

  const offerPrice = Number(Number(data.price) - Number(data.price)*Number(data.offer)/100);

  const [isOffer, setIsOffer] = useState(false);

  function handelClick(img, desc, id, price){
    dispatch(setOrder({
      img : img,
      desc : desc,
      price : price,
      id : id
    }));
  }

  useEffect(()=>{
    if(Number(data.offer) > 0){
      setIsOffer(true);
    }
  },[]);

  return (
      <div className={styles.card} onClick={()=>{handelClick(data.img, data.desc, data.id, data.price)}}>
      <div className={styles.image}>
      <img id={data.id} style={{height:'100%', width:'100%'}} src={data.img} alt="img..." />
      </div>
      <div className={styles.cardDetails}>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.description}>{data.desc}</div>
      <div className={styles.price}>
        { isOffer && <span>₹{offerPrice}</span>}
        <span style={isOffer ? {textDecoration:'line-through', color:'#999b9d'} : {}}>₹{data.price}</span>
      </div>
      </div>
      </div>
  )
}