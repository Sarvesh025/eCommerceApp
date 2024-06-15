import React from 'react'
import styles from './reviews.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function index({scrollAnimation}) {
    const images = [{
        "id": "102",
        "author": "Ben Moore",
        "width": 4320,
        "height": 3240,
        "url": "https://unsplash.com/photos/pJILiyPdrXI",
        "download_url": "https://picsum.photos/id/102/4320/3240"
      },
      {
        "id": "103",
        "author": "Ilham Rahmansyah",
        "width": 2592,
        "height": 1936,
        "url": "https://unsplash.com/photos/DwTZwZYi9Ww",
        "download_url": "https://picsum.photos/id/103/2592/1936"
      },
      {
        "id": "104",
        "author": "Dyaa Eldin",
        "width": 3840,
        "height": 2160,
        "url": "https://unsplash.com/photos/2fl-ocJ5MOA",
        "download_url": "https://picsum.photos/id/104/3840/2160"
      },
      {
        "id": "106",
        "author": "Arvee Marie",
        "width": 2592,
        "height": 1728,
        "url": "https://unsplash.com/photos/YnfGtpt2gf4",
        "download_url": "https://picsum.photos/id/106/2592/1728"
      },
      {
        "id": "107",
        "author": "Lukas Schweizer",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/9VWOr22LhVI",
        "download_url": "https://picsum.photos/id/107/5000/3333"
      },
      {
        "id": "108",
        "author": "Florian Klauer",
        "width": 2000,
        "height": 1333,
        "url": "https://unsplash.com/photos/t1mqA3V3-7g",
        "download_url": "https://picsum.photos/id/108/2000/1333"
      }];

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
    <div className={styles.reviews} data-aos={scrollAnimation}>
        <h1>Our Happy Customers</h1>
        <Carousel
        responsive={responsive}  
        autoPlay={true}
        autoPlaySpeed={2000}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        customTransition='transform 1000ms ease-in-out'
        rewind={true}
        rewindWithAnimation={true}
        arrows={false}
        className={styles.crousal}
        focusOnSelect={true}
        >
            {images.map((e, index)=>{
                return(
                    <img key={index} src={e.download_url} width={200} alt="image..." />
                    )
                })}          
        </Carousel>
    </div>
  )
}
