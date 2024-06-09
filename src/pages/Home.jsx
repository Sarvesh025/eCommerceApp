import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Process from '../components/Process'
import Services from '../components/Services'
import Quality from '../components/Quality'
import Whatsapp from '../components/Whatsapp'

export default function Home() {
  return (
    <div>
    <Banner/>
    <Products/>
    <Process/>
    <Services/>
    <Quality/>
    <Whatsapp/>
    </div>
  )
}
