import React, {Suspense} from 'react'
import LazyLoader from '../../../components/LazyLoader';
import styles from './card.module.css'
const Card = React.lazy(()=> import('../../Card/index'));
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
const Carousel = React.lazy(()=> import("react-multi-carousel"));
import "react-multi-carousel/lib/styles.css";


export default function card({ image, heading, content, scrollAnimation, data }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}      
  return (
    <div className={styles.card} data-aos={scrollAnimation}>
        <div className={styles.background}>
        {image}
        </div>
      <div className={styles.intro}>
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
          <Suspense fallback={<h1 style={{position:'absolute', zIndex:'9999', inset:'0'}}>Loading...</h1>}>
      <div className={styles.crousal}>
          {/* <LazyLoader> */}

        <Carousel className={styles.crousalSlider} 
        responsive={responsive}  
        autoPlay={true}
        autoPlaySpeed={2000}
        swipeable={true}
        draggable={true}
        keyBoardControls={true}
        showDots={true}
        renderDotsOutside={true}
        partialVisible={false}
        customTransition='transform 1000ms ease-in-out'
        rewind={true}
        rewindWithAnimation={true}
        focusOnSelect={true}
        >
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
          {/* </LazyLoader> */}
      </div>
          </Suspense>
    </div>
  )
}
