import React, { useEffect, useState } from 'react'
import styles from './section.module.css';
import Card from '../Card/index'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function index({title, data}) {
    const [prevBtn, setPrevBtn] = useState('none');
    const [nextBtn, setNextBtn] = useState('none');
  const ref = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);

  useEffect(()=>{

    if(Number(ref.current?.scrollWidth) > Number(ref.current?.clientWidth)){
        setNextBtn('flex');
        //   next.current.style.display = 'flex'
    }
  }, [])

  
  const handelScroll = () => {
    
    if(ref.current?.scrollLeft.toFixed() > 20){
        setPrevBtn('flex')
        // prev.current.style.display ='flex'
    }
    else{
        setPrevBtn('none')
        //prev.current.style.display ='none'
    }

    if (ref.current?.scrollWidth <= Number(ref.current?.scrollLeft.toFixed()) + Number(ref.current?.clientWidth)){
        setNextBtn('none')
        // next.current.style.display ='none'
      }
      else{
        setNextBtn('flex');
        // next.current.style.display ='flex'
      }
  };

  
  function handelPrev(){
    ref.current?.scrollBy(-Number(ref.current?.clientWidth), 0);
  }

  function handelNext(){
    ref.current?.scrollBy(Number(ref.current?.clientWidth), 0);
  }

  // const navigate = useNavigate();

  function handelClick(e){
    // const ans = e.target.id;
    // localStorage.setItem('frontDesign', JSON.stringify(data[ans].img))
    // localStorage.clear('backDesign');
    // console.log(data[ans].img);
    // window.open('/product', '_target')
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
      <div style={{ display:'flex', alignItems:'center'}}>
        <div ref={ref} className={styles.cards} onScroll={handelScroll}>

          {data.map((element, index)=>(
            <Card key={index} id={index} img={element.img} desc={element.desc} click={handelClick}/>
          ))}

        </div>
      </div>
    </div>
  )
}
