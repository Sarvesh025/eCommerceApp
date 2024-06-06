import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Quality from '../components/Quality'
import Whatsapp from '../components/Whatsapp'

export default function Home() {
  return (
    <div>
    <Banner/>
    {/* <Products/> */}
    <Services/>
    <Quality/>
    <Whatsapp/>
    </div>
  )
}
