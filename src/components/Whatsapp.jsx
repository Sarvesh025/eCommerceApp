import React from 'react'

export default function Whatsapp() {
  let message = 'Hello,Can you help me with a tshirt design?';
  return (
    <div style={{position:'fixed', bottom:'30px', right:'50px', zIndex:'9999'}}>
        <a href={`https://wa.me/918420836758?text=Check%20out%20this%20awesome%20t-shirt%20design!%0A%0Ahttps://example.com/t-shirt-design.jpg`}>
        <img src="/assets/whatsapp.png" alt="whatsapp img" width={100} height={100}/>
        </a>
    </div>
  )
}
