import React ,{useEffect, useState} from 'react'
import styles from './card.module.css'
import OrderOurProduct from '../OrderOurProduct/index.jsx';
import { useDispatch } from 'react-redux';
import { setOrder } from '../../redux/designs/orderSlice';

export default function Card({img, name, desc, price, offer, id, scrollAnimation}) {
  const dispatch = useDispatch();

  const offerPrice = Number(Number(price) - Number(price)*Number(offer)/100);

  const [isOffer, setIsOffer] = useState(false);

  function handelClick(img, desc, id){
    dispatch(setOrder({
      img : img,
      desc : desc,
      price : price,
      id : id
    }));
  }

  useEffect(()=>{
    if(Number(offer) > 0){
      setIsOffer(true);
    }
  },[]);

  return (
      <div className={styles.card} onClick={()=>{handelClick(img, desc, id)}}>
      <div className={styles.image}>
      <img id={id} style={{height:'100%', width:'100%'}} src={img} alt="img..." />
      </div>
      <div className={styles.cardDetails}>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{desc}</div>
      <div className={styles.price}>
        { isOffer && <span>₹{offerPrice}</span>}
        <span style={isOffer ? {textDecoration:'line-through', color:'#999b9d'} : {}}>₹{price}</span>
      </div>
      </div>
      </div>
  )
}