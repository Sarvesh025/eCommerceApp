import React, { useEffect } from 'react'
import Banner from '../components/Banner/index'
const Products = React.lazy(() => import('../components/Products'));
const Process = React.lazy(() => import('../components/Process'));
const Quality = React.lazy(() => import('../components/Quality'));
const Reviews = React.lazy(() => import('../components/Reviews'));
const OrderOurProduct = React.lazy(() => import('../components/OrderOurProduct'));
import Whatsapp from '../components/Whatsapp'
import { Suspense } from 'react'
import LazyLoader from '../components/LazyLoader'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Banner scrollAnimation="zoom-out" />
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyLoader>
          <Products />
        </LazyLoader>
        <LazyLoader>
          <Process />
        </LazyLoader>
        <LazyLoader>
          <Reviews scrollAnimation="zoom-in" />
        </LazyLoader>
        <LazyLoader>
          <Quality />
        </LazyLoader>
      </Suspense>
      <Whatsapp />
    </div>
  )
}
