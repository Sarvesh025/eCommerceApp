import React ,{useState} from 'react'
import styles from './card.module.css'
import OrderOurProduct from '../OrderOurProduct/index.jsx';

export default function Card({img, desc, id}) {

  const [show, setShow] = useState(false);

  function handelClick(img, desc, id){
    setShow(!show);
  }

  return (
    <>
    {show &&  <OrderOurProduct img={img} desc={desc} id={id} setShow={setShow}/>}
      <div className={styles.card} >
      <div className={styles.image} >
      <img id={id} onClick={()=>{handelClick(img, desc, id)}} style={{height:'100%', width:'100%'}} src={img} alt="img..." />
      </div>
      <div className={styles.description}>{desc}</div>
      </div>
    </>
  )
}