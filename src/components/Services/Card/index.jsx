import React from 'react'
import styles from './card.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../Card/index'

export default function card({ image, heading, content, scrollAnimation, data }) {

  return (
    <div className={styles.card} data-aos={scrollAnimation}>
        <div className={styles.background}>
        {image}
        </div>
      <div className={styles.intro}>
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
      <div className={styles.crousal}>
        <Carousel className={styles.crousalSlider} showThumbs={false} centerMode={true} showArrows={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true}>
          {
            data.map((e, index)=>{
              return(
                <div key={index}>
                    <Card img={e.design} desc={e.desc} id={e.id}/>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}
