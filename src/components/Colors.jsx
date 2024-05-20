import React from 'react'

export default function Colors({setColor, click, children}) {

  const color = {
    height:'100px',
    width:'100px',
    border:'7px outset',
    background:setColor,
    position:'relative',
    cursor:'pointer'
  }


  return (
    <div style={color} onClick={click}>
        {children}
    </div>
  )
}
