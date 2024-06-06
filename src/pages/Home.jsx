import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Whatsapp from '../components/Whatsapp'

export default function Home() {
  return (
    <div>
    <Banner/>
    {/* <Products/> */}
    <Services/>
    <Whatsapp/>
    </div>
  )
}
