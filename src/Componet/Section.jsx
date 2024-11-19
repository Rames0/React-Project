import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Login'
import Register from './Register'
import ForgetPass from './ForgetPass'
import Contact from './pages/Contact'


function Section() {
  return (
    <>
    <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/ForgetPass" element={<ForgetPass/>}/>
            

        


            
            {/* <Route path="/*" element={<Pagenotfound/>}/> */}
        </Routes>
      
    </>
  )
}

export default Section
