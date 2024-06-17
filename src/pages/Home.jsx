import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Process from '../components/Process'
import Services from '../components/Services'
import Quality from '../components/Quality'
import Reviews from '../components/Reviews'
import Whatsapp from '../components/Whatsapp'
import OrderOurProduct from '../components/OrderOurProduct'
import { useSelector } from 'react-redux';


import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const data = useSelector((state) => state.order.value);

  useEffect(() =>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <div style={{overflowX:'hidden'}}>
    <Banner scrollAnimation="zoom-out"/>
    <Products/>
    <Process/>
    <Reviews scrollAnimation="zoom-in"/>
    <Quality/>
    {data.img && data.desc && data.id && <OrderOurProduct img = {data.img} desc={data.desc} id={data.id}/>}    
    <Whatsapp/>
    </div>
  )
}
