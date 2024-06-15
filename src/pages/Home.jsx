import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Process from '../components/Process'
import Services from '../components/Services'
import Quality from '../components/Quality'
import Reviews from '../components/Reviews'
import Whatsapp from '../components/Whatsapp'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() =>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <div>
    <Banner scrollAnimation="zoom-out"/>
    <Products/>
    <Process/>
    <Reviews scrollAnimation="zoom-in"/>
    <Quality/>
    <Whatsapp/>
    </div>
  )
}
