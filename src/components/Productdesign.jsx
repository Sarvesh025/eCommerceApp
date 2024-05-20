import React from 'react'

export default function Productdesign({design, width, background, position, designHeight}) {
    const image = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        width: '30%' ,
        background: background
    }

    const box = {
        display:'flex',
        overflow: 'hidden',
        width: '29%',
        height: designHeight,
        zIndex: '3',
        justifyContent:position.justifyContent,
        alignItems:position.alignItems
    }

  return (
    <div style={image}>
        <div style={box}>
        <img style={{width:`${width}%`,height:'fit-content', maxWidth:'100%', minWidth:'30%', }} src={design} alt="front images..." />
        </div>  
      </div> 
  )
}
