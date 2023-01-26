import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Reset from './pages/auth/Reset';



const App = () => {
  

  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/reset' element={<Reset/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  
   
    

  <Footer/>
  </BrowserRouter>

  </>
  
  )
}

export default App