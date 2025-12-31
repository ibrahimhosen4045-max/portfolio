import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './component/Navber'
import Hero from './component/Hero'
import About from './component/About'
import Servises from './component/Servises'
import Mywork from './component/Mywork'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <About></About>
      <Servises></Servises>
      <Mywork></Mywork>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
