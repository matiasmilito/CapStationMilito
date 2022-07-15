import React from "react";
import NavBar from "./components/NavBar";
import FloatingWhatsApp from 'react-floating-whatsapp';
import LogoW from './assets/LogoWhatsapp.png';

function App() {
  return (
    <>
      <NavBar />
      <FloatingWhatsApp 
        phoneNumber='543412553267'
        accountName='CapStation'
        allowClickAway
        avatar={LogoW}
        notification
        notificationSound
        defaultMessage={'Hola! Estoy interesado en unas de sus gorras!'}
      />
    </>
  )
}

export default App
