import React, { useEffect } from 'react'
import Card from './Card'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

const section = {
    border:'1px solid',
}

const cards = {
    display:'flex',
    gap: '1rem',
    overflow: 'scroll',
    scrollbarWidth:'none',
    border: '1px solid',
    padding: '10px',
    scrollBehavior:'smooth'
}

export default function Section({title, data}) {
  const ref = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);

  useEffect(()=>{

    if(Number(ref.current?.scrollWidth) > Number(ref.current?.clientWidth)){
      next.current.style.display = 'block'
    }
  }, [])

  
  const handelScroll = () => {
    
    if(ref.current?.scrollLeft.toFixed() > 20){
        prev.current.style.display ='block'
    }
    else{
      prev.current.style.display ='none'
    }

    if (ref.current?.scrollWidth === Number(ref.current?.scrollLeft.toFixed()) + Number(ref.current?.clientWidth)){
        next.current.style.display ='none'
      }
      else{
        next.current.style.display ='block'
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
    const ans = e.target.id;
    localStorage.setItem('frontDesign', JSON.stringify(data[ans].img))
    localStorage.clear('backDesign');
    console.log(data[ans].img);

    // window.open('/product', '_target')
  }

return (   
    <div style={section}>
      <h2>{title}</h2>
      <div style={{position:'relative', display:'flex', alignItems:'center'}}>
       <button ref={prev} style={{position:'absolute', zIndex:'10', left:'0', display:'none'}} onClick={handelPrev}>prev</button>
        <div ref={ref} style={cards} onScroll={handelScroll}>

          {data.map((element, index)=>(
            <Card key={index} id={index} img={element.img} desc={element.desc} click={handelClick}/>
          ))}

        </div>
        <button ref={next} style={{position:'absolute', zIndex:'10', right:'0', display:'none'}} onClick={handelNext}>next</button>
      </div>
    </div>
  )
}
