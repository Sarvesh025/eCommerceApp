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
// import Upload from './pages/Upload'
// import Orders from './pages/Orders'
// import Wishlist from './pages/Wishlist'
// import Notifications from './pages/Notifications'
// import Product from './pages/Product'
import Navbarcontainer from './components/Navbarcontainer'
import Navbar2 from './components/Navbar2'
// import About from './pages/About/index'
// import Contact from './pages/Contact'
import NavModal from './components/navModal/NavModal'

function App() {

  const [isOpen, setOpen] = useState(false);

  function RouteRender() {

    const location = useLocation();
    if (location.pathname !== '/product/:name?') {
      return <Navbar2 />
    }
  }


  return (
    <>
      <Router>
        <NavModal isO={isOpen} setOpen={setOpen} />
        <Navbarcontainer isOpen={isOpen} setOpen={setOpen} />
        {/* <RouteRender/> */}
      
        <div style={isOpen? { height:'0vh', overflow:'hidden'} :{ minHeight: '83vh', display: 'flex', flexDirection: 'column' }}>
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
