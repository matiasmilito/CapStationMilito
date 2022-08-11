import React from 'react';
import NavBar from './components/NavBar';
import FloatingWhatsApp from 'react-floating-whatsapp';
import LogoW from './assets/LogoWhatsapp.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Gorras from './components/Gorras';
import Login from './components/Login';
import Register from './components/Register';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';



function App() {
  return (
    <Router>
        <div>
          <CartProvider>
          <NavBar />
          <div className='h-[80px]'></div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/gorras' element={<Gorras />} />
              <Route path='/type/:productType' element={<ItemListContainer />} />
              <Route path='/product/:productId' element={<ItemDetailContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          <Footer/>
          <FloatingWhatsApp 
            phoneNumber='543412553267'
            accountName='CapStation'
            allowClickAway
            avatar={LogoW}
            defaultMessage={'Hola! Estoy interesado en unas de sus gorras!'}
          />
          </CartProvider>
        </div>
    </Router>
  )
}

export default App
