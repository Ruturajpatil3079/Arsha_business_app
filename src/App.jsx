import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './About'
import Video from './components/Video'
import Features from './components/Features'
import Team from './components/Team'
import Testamonials from './components/Testamonials'
import Faqs from './Faqs'
import Footer from './components/Footer'
import Download from './components/Download'

function App() {
  

  return (
    <div>
      <Header footer={Footer}/>
      <Banner/>
      <About/>
      <Video/>
      <Features/>
      <Team/>
      <Testamonials/>
      <Faqs/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App
