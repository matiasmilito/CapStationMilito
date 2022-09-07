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
import Checkout from './components/Checkout';
import { AuthContextProvider } from './context/AuthContext';
import Profile from './components/Profile';
import ProtectedRoutes from './components/ProtectedRoutes';
import AdminPage from './components/AdminPage';



function App() {
  return (
    <Router>
        <div>
          <AuthContextProvider>
            <CartProvider>
            <NavBar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gorras' element={<Gorras />} />
                <Route path='/type/:productType' element={<ItemListContainer />} />
                <Route path='/product/:productId' element={<ItemDetailContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<ProtectedRoutes><Checkout /></ProtectedRoutes>} />
                <Route path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
                <Route path='/adminpage' element={<AdminPage />} />
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
          </AuthContextProvider>
        </div>
    </Router>
  )
}

export default App
