import React, { useState } from 'react'
import Colors from './Colors'
import { CiSquareCheck } from "react-icons/ci";


const colorPreferences = {
  display:'flex',
  gap: '1rem',
  flexWrap: 'wrap',
}

const tick ={
  position:'absolute',
  top:'0',
  bottom:'0',
  left:'0',
  right:'0',
  width:'100%',
  height:'100%',
  mixBlendMode :'difference'
}

export default function Colorpreferences() {

  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [white, setWhite] = useState(false);
  const [black, setBlack] = useState(false);

 
  return (
    <div style={colorPreferences}>
      <Colors setColor='red' click = {()=>{setRed(!red)}}>
        {red && <CiSquareCheck style={tick}/>}
      </Colors>
      <Colors setColor='blue' click = {()=>{setBlue(!blue)}}>
      {blue && <CiSquareCheck style={tick}/>}
      </Colors>
      <Colors setColor='green' click = {()=>{setGreen(!green)}}>
      {green && <CiSquareCheck style={tick}/>}
      </Colors>
      <Colors setColor='yellow' click = {()=>{setYellow(!yellow)}}>
      {yellow && <CiSquareCheck style={tick}/>}
      </Colors>
      <Colors setColor='white' click = {()=>{setWhite(!white)}}>
      {white && <CiSquareCheck style={tick}/>}
      </Colors>
      <Colors setColor='black' click = {()=>{setBlack(!black)}}>
      {black && <CiSquareCheck style={tick}/>}
      </Colors>
    </div>
  )
}
