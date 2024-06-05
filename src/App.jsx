import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes as Routes ,Route as Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import Upload from './pages/Upload'
import Orders from './pages/Orders'
import Wishlist from './pages/Wishlist'
import Notifications from './pages/Notifications'
import Product from './pages/Product'
import Navbarcontainer from './components/Navbarcontainer'
import Navbar2 from './components/Navbar2'
import About from './pages/About'
import Contact from './pages/Contact'
import  {useState} from 'react';
// import {Provider} from 'react-redux'

function App() {  

  const [isOpen, setOpen] = useState(false);

  const MoboMenuStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display:'grid',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  function RouteRender(){
    
    const location = useLocation();
    if(location.pathname !== '/product/:name?'){
      return <Navbar2/>
    }
  }


  return (
    <>
    {/* <Provider store={store}> */}
   <Router>
   <Navbarcontainer isOpen={isOpen} setOpen={setOpen}/>
    {/* <RouteRender/> */}
    <div style={isOpen? MoboMenuStyle : {display: 'none'}}>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
    </div>

    <div style={{minHeight:'83vh', display:'flex', flexDirection:'column'}}>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/notifications' element={<Notifications/>}/>
    <Route path='/product/:name' element={<Product/>}/>
   </Routes>
   </div>
   <Footer/>
    </Router>
    {/* </Provider> */}
    </>
  )
}

export default App
