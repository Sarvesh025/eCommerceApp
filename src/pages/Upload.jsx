import React, { useEffect, useState } from 'react'
import Dropbox from '../components/Dropbox'
import Heading from '../components/Heading'

export default function Upload() {

    const[frontImage, setFrontImage] = useState(null);
    const[frontName, setFrontName] = useState(null);
    const[backImage, setBackImage] = useState(null);
    const[backName, setBackName] = useState(null);
  
    function frontData(imageData, nameData){
      setFrontImage(imageData);
      setFrontName(nameData)
    }

    function backData(imageData, nameData){
      setBackImage(imageData);
      setBackName(nameData);
    }

    function handelDesigns(){
      if(frontImage !== null && backImage !== null){
        localStorage.setItem('frontDesign', JSON.stringify(frontImage))
        localStorage.setItem('backDesign', JSON.stringify(backImage));
        window.open(`/product/${frontName + "+" + backName}`, '_target');          
      }
      else if(frontImage !== null && backImage === null){
        localStorage.setItem('frontDesign', JSON.stringify(frontImage))
        window.open(`/product/${frontName}`, '_target');          
      }
      else if(frontImage === null && backImage !== null){
        localStorage.setItem('backDesign', JSON.stringify(backImage));
        window.open(`/product/${backName}`, '_target');          
      }
      else{
        alert('please upload a design.')
      }
        }

  return (
    <>
    <Heading navName="Upload your Designs"/>
    <div style={{display:'flex'}}>
        <Dropbox title="Upload Front Design" getData={frontData}/>
        <Dropbox title="Upload Back Design" getData={backData}/>
    </div>
        <button style={{width:'90%', alignSelf:'center'}} onClick={handelDesigns} disabled={frontImage === null && backImage === null}>Try Now</button>
    </>
  )
}
