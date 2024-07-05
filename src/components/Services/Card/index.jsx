import React, { Suspense } from 'react'
import LazyLoader from '../../../components/LazyLoader';
import styles from './card.module.css'
const Card = React.lazy(() => import('../../Card/index'));
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
const Carousel = React.lazy(() => import("react-multi-carousel"));
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';


export default function card({ image, heading, content, scrollAnimation, data }) {

  const navigate = useNavigate();

  function handelClick(){
    const route = heading.toLowerCase();
    navigate(`categories/${route}`, {state : {data : data, title : heading}});
  }
  
  return (
    <div className={styles.card} onClick={handelClick} data-aos={scrollAnimation}>
      <div className={styles.background}>
        {image}
      </div>
      <div className={styles.overlay}>
        <div className={styles.intro}>
          <h2>{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
