import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PreloaderStart from './components/PreloaderStart'
import Mainwrapper from './components/header/Mainwrapper'

function App() {

  return (
    <>
      <PreloaderStart/>
      <Mainwrapper/>
    </>
  )
}

export default App
