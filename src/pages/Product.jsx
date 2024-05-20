import React, { useEffect, useRef, useState } from 'react'
import Productdesign from '../components/Productdesign'
import Size from '../components/Size'
import { GiPoloShirt } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { GiHoodie } from "react-icons/gi";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import {useLocation} from "react-router-dom";
import {useSelector} from 'react-redux'


const product = {
  display:'flex',
  justifyContent:'space-around',
  alignItems:'center'
}

const form = {
  // border: '1px solid green',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem'
}

const toggleBtn = {
  display: 'flex',
  height: '60px',
  alignItems: 'center',
  textAlign: 'center'
}

const frontToggle = {
  width:'50%',
  height: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const backToggle = {
  width:'50%',
  height: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default function Product() {

  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);
  const [toggle, setToggle] = useState(true);

  const [frontWidth, setFrontWidth] = useState(50);
  const [backWidth, setBackWidth] = useState(50);

  const [frontOption, setFrontOption] = useState('fBody');
  const [backOption, setBackOption] = useState('bBody');

  const [frontPosition, setFrontPosition] = useState({justifyContent:'center', alignItems:'center'});
  const [backPosition, setBackPosition] = useState({justifyContent:'center', alignItems:'center'});

  const fToggle = useRef();
  const bToggle = useRef();

  const [smallSize, setSmallSize] = useState(0);
  const [largeSize, setLargeSize] = useState(0);
  const [mediumSize, setMediumSize] = useState(0);
  const [extraLargeSize, setExtraLargeSize] = useState(0);
  const [count, setCount] = useState(0);

  const [cloths, setCloths] = useState({
    front : "url('../src/assets/frontImg.png')",
    back : "url('../src/assets/backImg.png')"
  })

  const [selectedCloths, setSelectedCloths] = useState('tShirt');

useEffect(()=>{
  if(toggle){    
    fToggle.current.style.background = 'rgb(36 36 36)'
      bToggle.current.style.background = '#191919'
      fToggle.current.style.boxShadow = 'none'
      bToggle.current.style.boxShadow = '1px -3px 5px black inset'
      bToggle.current.style.cursor = 'pointer'
      fToggle.current.style.cursor = 'context-menu'
  }
  else{
    bToggle.current.style.background = 'rgb(36 36 36)'
    fToggle.current.style.background = '#191919'
    fToggle.current.style.boxShadow = '-1px -3px 5px black inset'
    fToggle.current.style.cursor = 'pointer'
    bToggle.current.style.cursor = 'context-menu'
    bToggle.current.style.boxShadow = 'none'
  }
},[toggle])
  
const main = useRef();

  useEffect(()=>{

    const a = JSON.parse(localStorage.getItem('frontDesign'));
    const b = JSON.parse(localStorage.getItem('backDesign'));
      
      if(a != null && b != null){
        setFront(JSON.parse(localStorage.getItem('frontDesign')));
        setBack(JSON.parse(localStorage.getItem('backDesign')));
      }
      else if(a != null && b == null){
      setFront(JSON.parse(localStorage.getItem('frontDesign')));
      bToggle.current.style.display = 'none';
      fToggle.current.style.width = '100%'
    }
    else if(a == null && b != null){
      setBack(JSON.parse(localStorage.getItem('backDesign')));
      fToggle.current.style.display = 'none';
      bToggle.current.style.width = '100%'
      setToggle(false);
    }
    // else{
    //   main.current.style.content = 'Error 404, Design Not Found'
    //   // <h2>Error 404, Design Not Found</h2>
    // }

  }, [])

  // useEffect(()=>{
  //   if(front != null && back == null){

  //   }
  // }, [front, back])


  function negativeScale(){
    if(toggle){
      if(frontWidth >30){
        setFrontWidth(frontWidth - 10);
      }
    }
    else{
      if(backWidth >30){
        setBackWidth(backWidth - 10);
      }
    }
  }

  function positiveScale(){
    if(toggle){
      if(frontWidth < 100){
        setFrontWidth(frontWidth + 10);
      }
    }
    else{
      if(backWidth  < 100){
        setBackWidth(backWidth + 10);
      }
    }
  }
  
  function handelFrontPosition(e){
    setFrontOption(e.target.value);
    }

  useEffect(()=>{
    if(frontOption === 'fChest'){
      setFrontPosition({
        justifyContent:'center',
        alignItems:'flex-start'
      })
     
    }
    else if(frontOption === 'fLeftChest'){
      setFrontPosition({
        justifyContent:'flex-end',
        alignItems:'flex-start'
      })
    }
    else if(frontOption === 'fRightChest'){
      setFrontPosition({
        justifyContent:'flex-start',
        alignItems:'flex-start'
      })
      
    }
    else if(frontOption === 'fBody'){
      setFrontPosition({
        justifyContent:'center',
        alignItems:'center'
      })
     
    }
    else{
      setFrontPosition({
        justifyContent:'center',
        alignItems:'flex-end'
      })
    }

  }, [frontOption]);
  

  function handelBackPosition(e){
    setBackOption(e.target.value);
  }

  useEffect(()=>{
    if(backOption === 'bChest'){
      setBackPosition({
        justifyContent:'center',
        alignItems:'flex-start'
      })
    }
    else if(backOption === 'bBody'){
      setBackPosition({
        justifyContent:'center',
        alignItems:'center'
      })
    }
    else{
      setBackPosition({
        justifyContent:'center',
        alignItems:'flex-end'
      })
    }
  }, [backOption]);

      
  function handelFrontToggle(){
    if(toggle === false){
      setToggle(!toggle);
    }
  }

  function handelBackToggle(){
    if(toggle === true){
      setToggle(!toggle);
    }
  }

  function small(data){
    setSmallSize(data)
  }
  function large(data){
    setLargeSize(data);
  }
  function medium(data){
    setMediumSize(data);
  }
  function extraLarge(data){
    setExtraLargeSize(data);
  }

  useEffect(()=>{
    setCount(Number(smallSize) + Number(largeSize) + Number(mediumSize) + Number(extraLargeSize));
  }, [smallSize, largeSize, mediumSize, extraLargeSize])


  function handleCloths(cloth){
    setSelectedCloths(cloth)

    if(cloth === 'tShirt'){
      setCloths({
        front:"url('../src/assets/frontImg.png')",
        back:"url('../src/assets/backImg.png')"
      })
    }
    else if(cloth === 'poloShirt'){
      setCloths({
        front:"url('../src/assets/frontPolo.png')",
        back:"url('../src/assets/backPolo.png')"
      })
    }
    else{
      setCloths({
        front:"url('../src/assets/frontHoodie.png')",
        back:"url('../src/assets/backHoodie.png')"
      })
    }
  }

  const temp = useSelector((state)=>state.designs.value)
  console.log(temp);

  return (
    <div style={product} ref ={main}>

      {/* {location.state && <Productdesign design = {toggle ? front : back} position={toggle ? frontPosition : backPosition} width={toggle ? frontWidth : backWidth} designHeight={toggle ? '42%' : '53%'} background={toggle ? `${cloths.front} center center / contain no-repeat` : `${cloths.back} center center / contain no-repeat`}/>} */}
      <Productdesign design = {toggle ? front : back} position={toggle ? frontPosition : backPosition} width={toggle ? frontWidth : backWidth} designHeight={toggle ? '42%' : '53%'} background={toggle ? `${cloths.front} center center / contain no-repeat` : `${cloths.back} center center / contain no-repeat`}/>     

      <div style={{display:'flex', flexDirection:'column', gap:'1rem', justifyContent:'space-around', height:'50vh'}}>

     <label>
        <input
          type="radio"
          name="button"
          checked={selectedCloths === 'tShirt'}
          onChange={() => handleCloths('tShirt')}
        hidden/>
        <IoShirt size='2em' color={selectedCloths === 'tShirt' ? '#747bff' : 'white'}/>
        </label>
     <label>
        <input
          type="radio"
          name="button"
          checked={selectedCloths === 'poloShirt'}
          onChange={() => handleCloths('poloShirt')}
        hidden/>
        <GiPoloShirt size='2em' color={selectedCloths === 'poloShirt' ? '#747bff' : 'white'}/>
        </label>
     <label>
        <input
          type="radio"
          name="button"
          checked={selectedCloths === 'hoodie'}
          onChange={() => handleCloths('hoodie')}
        hidden/>
        <GiHoodie size='2em' color={selectedCloths === 'hoodie' ? '#747bff' : 'white'}/>
        </label>

      </div>

      <div style={form}>
        <div style={toggleBtn}>
          <div style={frontToggle} ref={fToggle} onClick={handelFrontToggle}><b>FRONT</b></div>
          <div style={backToggle} ref={bToggle} onClick={handelBackToggle}><b>BACK</b></div>
        </div>

      <div>
        <h3 style={{fontFamily:'cursive',textAlign:'center', textDecoration:'underline'}}>Position</h3>
        <br />
        {toggle ?
        <div style={{display:'flex', justifyContent:'space-between', gap:'1rem'}}>
        <label><h4 style={{color : frontOption === 'fChest' ? '#747bff' : 'white'}}>CHEST</h4>
          <input type="radio" name='front' value='fChest' onChange={handelFrontPosition} checked = {frontOption === 'fChest'} hidden/>
          </label>
        <label><h4 style={{color : frontOption === 'fLeftChest' ? '#747bff' : 'white'}}>LEFT-CHEST</h4>
          <input type="radio" name='front' value='fLeftChest' onChange={handelFrontPosition} checked = {frontOption === 'fLeftChest'} hidden/>
          </label>
        <label><h4 style={{color : frontOption === 'fRightChest' ? '#747bff' : 'white'}}>RIGHT-CHEST</h4>
          <input type="radio" name='front' value='fRightChest' onChange={handelFrontPosition} checked = {frontOption === 'fRightChest'} hidden/>
          </label>
        <label><h4 style={{color : frontOption === 'fBody' ? '#747bff' : 'white'}}>BODY</h4>
          <input type="radio" name='front' value='fBody' onChange={handelFrontPosition} checked = {frontOption === 'fBody'} hidden/>
          </label>
        <label><h4 style={{color : frontOption === 'fBottom' ? '#747bff' : 'white'}}>BOTTOM</h4>
          <input type="radio" name='front' value='fBottom' onChange={handelFrontPosition} checked = {frontOption === 'fBottom'} hidden/>
          </label>
        </div>
            :
        <div  style={{display:'flex', justifyContent:'space-between', gap:'1rem'}}>
        <label><h4 style={{color : backOption === 'bChest' ? '#747bff' : 'white'}}>UPPER-BACK</h4>
          <input type="radio" name='back' value='bChest' onChange={handelBackPosition} checked={backOption === 'bChest'} hidden/>
          </label>
        <label ><h4 style={{color : backOption === 'bBody' ? '#747bff' : 'white'}}>BACK</h4>
          <input type="radio" name='back' value='bBody' onChange={handelBackPosition} checked={backOption === 'bBody'} hidden/>
          </label>
        <label ><h4 style={{color : backOption === 'bBottom' ? '#747bff' : 'white'}}>LOWER-BACK</h4>
          <input type="radio" name='back' value='bBottom' onChange={handelBackPosition} checked={backOption === 'bBottom'} hidden/>
          </label>
        </div>
        }

      </div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <button onClick={negativeScale}><FaSearchMinus/></button>
        <h4>ADJUST YOUR DESIGN</h4>
        <button onClick={positiveScale}><FaSearchPlus/></button>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'1rem', justifyContent:'space-around', textDecoration:'underline'}}>
        <h3 style={{fontFamily:'cursive'}}>Add Cloths (Sizes) : </h3>
      <Size name='S' getCount={small}/>
      <Size name='L' getCount={large}/>
      <Size name='M' getCount={medium}/>
      <Size name='XL' getCount={extraLarge}/>
      </div>


      <div style={{fontFamily:'cursive', textAlign:'center'}}>Number of Items : {count}</div>

      *Note : Discounts are only applicable over 5 or more T-shirts.
      <div><button>Check Price</button></div>
      {/* <div>Order</div> */}
      </div>
    </div>
  )
}