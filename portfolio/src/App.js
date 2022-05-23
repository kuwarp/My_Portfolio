import React from 'react'
import {About,Work,Skills,Header,Footer,Testimonial} from './container/export'
import{Navbar}from './components/export'
import './App.scss';
function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <About/>
    <Footer/>
    <Skills/>
    <Testimonial/>
    <Work/>
   </div>
  )
}

export default App