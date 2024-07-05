import './App.css'
import React, { useState, Suspense } from 'react';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes as Routes, Route as Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
const Contact = React.lazy(()=> import ('./pages/Contact/index'));
const About = React.lazy(()=> import ('./pages/About/index'));
const Account = React.lazy(()=> import ('./pages/Account'));
const Upload = React.lazy(()=> import ('./pages/Upload'));
const Orders = React.lazy(()=> import ('./pages/Orders'));
const Product = React.lazy(()=> import ('./pages/Product'));
const Wishlist = React.lazy(()=> import ('./pages/Wishlist'));
const Notifications = React.lazy(()=> import ('./pages/Notifications'));
import Navbarcontainer from './components/Navbarcontainer'
import Navbar2 from './components/Navbar2'
import OrderOurProduct from './components/OrderOurProduct';
import NavModal from './components/navModal/NavModal'
import Catagories from './pages/Categories';
import { useSelector } from 'react-redux';

function App() {

  const [isOpen, setOpen] = useState(false);

  function RouteRender() {

    const location = useLocation();
    if (location.pathname !== '/product/:name?') {
      return <Navbar2 />
    }
  }

  const data = useSelector((state) => state.order.value);

  return (
    <>
      <Router>
        <NavModal isO={isOpen} setOpen={setOpen} />
        <Navbarcontainer isOpen={isOpen} setOpen={setOpen} />
        {/* <RouteRender/> */}
        {data.img && data.desc && data.id && data.price && <OrderOurProduct img={data.img} desc={data.desc} id={data.id} />}
        <div style={isOpen? { height:'0vh', overflow:'hidden'} :{ display: 'flex', flexDirection: 'column' }}>
            <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/account' element={<Account />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/product/:name' element={<Product />} />
            <Route path='/categories/:filter?' element={<Catagories />} />
          </Routes>
            </Suspense>
        </div>
        <div style={isOpen? { height:'0vh', overflow:'hidden'} : {}}>
        <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
