import React from 'react'

export default function Whatsapp() {
  return (
    <div style={{position:'fixed', bottom:'30px', right:'50px', zIndex:'9999'}}>
        <a href="https://wa.me/918420836758?text=Hello,Can you help me with a tshirt design?">
        <img src="/assets/whatsapp.png" alt="whatsapp img" width={60} height={60}/>
        </a>
    </div>
  )
}
