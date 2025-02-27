import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './assets/Header'
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
import Services from './assets/Services'
import Gallery from './assets/Gallery'
import Footer from './assets/Footer'
import Cart from './assets/Cart'

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
      <Footer/>
        
    </>
  )
}

export default App
