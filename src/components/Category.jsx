import React, { useState } from 'react'
import Card from './Card'
// import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const category = {
  display: 'flex',
  flexWrap: 'wrap'
}

const check = {
  position:'absolute',
  top:'0',
  bottom:'0',
  left:'0',
  right:'0',
  width:'100%',
  height:'100%',
  mixBlendMode :'difference'
}

export default function Category() {

  const [code, setCode] = useState(false);
  const [horror, setHorror] = useState(false);
  const [gym, setGym] = useState(false);


  return (
    <div style={category}>
     <Card img="../src/assets/code.jpg" desc="CODING" click = {()=>{setCode(!code)}}>
      {code && <FaCheck size={100} style={check}/>}
     </Card>
     <Card img="../src/assets/horror.jpg" desc="HORROR" click = {()=>{setHorror(!horror)}}>
     {horror && <FaCheck size={100} style={check}/>}
     </Card>
     <Card img="../src/assets/gym.jpg" desc="GYM" click = {()=>{setGym(!gym)}}>
     {gym && <FaCheck size={100} style={check}/>}
     </Card>
    </div>
  )
}
