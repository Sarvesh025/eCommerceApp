import React from 'react'
export default function Banner({scrollAnimation}) {
  return (
    <div data-aos={scrollAnimation}>
       <video width="100%" height="100%" style={{objectFit:'cover'}} playsInline muted autoPlay loop>
      <source src="/assets/wishStoreBanner.mp4" type="video/mp4"/>
    </video>
    </div>
  )
}
