import React from 'react'


export default function Banner() {
  return (
    <div >
       <video width="100%" height="100%" style={{objectFit:'cover'}} controls>
      <source src="../src/assets/banner.mp4" type="video/mp4"/>
    </video>
    </div>
  )
}
