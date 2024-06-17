import React, { useEffect, useState } from 'react'
import styles from './section.module.css';
import Card from '../Card/index'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function index({title, data, scrollAnimation}) {
    const [prevBtn, setPrevBtn] = useState('none');
    const [nextBtn, setNextBtn] = useState('none');
  const ref = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);

  useEffect(()=>{

    if(Number(ref.current?.scrollWidth) > Number(ref.current?.clientWidth)){
        setNextBtn('flex');
    }
  }, [])

  
  const handelScroll = () => {
    
    if(ref.current?.scrollLeft.toFixed() > 20){
        setPrevBtn('flex')
    }
    else{
        setPrevBtn('none')
    }

    if (ref.current?.scrollWidth <= Number(ref.current?.scrollLeft.toFixed()) + Number(ref.current?.clientWidth)){
        setNextBtn('none')
      }
      else{
        setNextBtn('flex');
      }
  };

  
  function handelPrev(){
    ref.current?.scrollBy(-Number(ref.current?.clientWidth), 0);
  }

  function handelNext(){
    ref.current?.scrollBy(Number(ref.current?.clientWidth), 0);
  }



  function handelClick(e){

  }

return (   
    <div className={styles.section}>
      <div className={styles.heading}>
      <h2>{title}</h2>
      <div className={styles.scrollBtnContainer}>
       <span ref={prev} className={styles.scrollButtons} style={{display:prevBtn}} onClick={handelPrev}><CiCircleChevLeft size={35}/></span>
        <span ref={next} className={styles.scrollButtons} style={{display:nextBtn}} onClick={handelNext}><CiCircleChevRight size={35}/></span>
      </div>
      </div>
      <div style={{ display:'flex', alignItems:'center'}} data-aos={scrollAnimation}>
        <div ref={ref} className={styles.cards} onScroll={handelScroll}>

          {data.map((element, index)=>(
            <Card key={index} id={element.id} img={element.img} desc={element.desc} click={handelClick}/>
          ))}

        </div>
      </div>
    </div>
  )
}
