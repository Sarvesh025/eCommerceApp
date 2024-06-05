import React from 'react'


export default function Banner() {
  return (
    <div >
       <video width="100%" height="100%" style={{objectFit:'cover'}} autoPlay>
      <source src="/assets/banner.mp4" type="video/mp4"/>
    </video>
    </div>
  )
}
