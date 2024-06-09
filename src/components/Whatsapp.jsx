import React from 'react'

export default function Whatsapp() {
  return (
    <div style={{position:'fixed', bottom:'calc((100vw/1920)*30)', right:'calc((100vw/1920)*50)', zIndex:'9999'}}>
        <a href="https://wa.me/918420836758?text=Hello,Can you help me with a tshirt design?">
        <img src="/assets/whatsapp.png" alt="whatsapp img" width={100} height={100}/>
        </a>
    </div>
  )
}
