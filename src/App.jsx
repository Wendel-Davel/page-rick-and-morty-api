import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Application } from './components/Application'
import GlobalStyle from './styles/global'
import AOS from 'aos';
import 'aos/dist/aos.css';

// ..
AOS.init({
  duration:1800,
  once: true,
  disable: 'mobile'
});


export default function App() {


  return (
    <>
    <GlobalStyle/>
    <Application/>
    </>
  )
}


