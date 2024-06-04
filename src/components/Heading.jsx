import React from 'react'


const heading =  {
    position:'relative'
}

const banner = {
    width: '-webkit-fill-available',
    height: '30vh',
    objectFit: 'cover',
    opacity:'0.4'
}

const text = {
    position:'absolute',
    top:'10%',
    left:'15%',
    zIndex:'10',
    fontSize:'xxx-large'
}
export default function Heading({navName}) {
  return (
    <div style={heading}>
        <h2 style={text}>{navName}</h2>
      <img style={banner} src="/assets/image.png" alt="img..." />
    </div>
  )
}
