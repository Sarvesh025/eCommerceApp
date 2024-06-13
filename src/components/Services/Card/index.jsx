import React from 'react'
import styles from './card.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function card({ image, heading, content }) {

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

  return (
    <div className={styles.card}>
      <div className={styles.intro}>
        <img src={image} alt="image..." className={styles.img} />
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.crousal}>
        <Carousel className={styles.crousalSlider} showThumbs={false} centerMode={true} autoPlay={true} infiniteLoop={true}>
          {
            images.map((e)=>{
              return(
                <div>
                  <img src={e.download_url} alt="image..." className={styles.img} />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}
