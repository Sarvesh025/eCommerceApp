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
// import {Provider} from 'react-redux'

function App() {  

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
   <Navbarcontainer/>
    {/* <RouteRender/> */}
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
