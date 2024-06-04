import React from 'react'

const card = {
    height:'40vh',
    minWidth:'15vw',
    border:'1px solid red',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
}

const image = {
  width:'95%',
  height:'80%',
  border:'1px solid green',
  cursor:'pointer',
  position:'relative'
}

const description = {
  height:'10%',
  display:'flex',
  alignItems:'center'
}

export default function Card({img, desc, click, id, children}) {
  return (
    <div style={card} >
      <div style={image} >
      {children}
      <img id={id} onClick={click} style={{height:'100%', width:'100%'}} src={img} alt="img..." />
      </div>
      <div style={description}>{desc}</div>
    </div>
  )
}