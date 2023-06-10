import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Header from './pages/Header';

const RouteService = () => {
  return (
    <div >
       <Routes>
        <Route path ='/' element={<Header/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/user' element = {<Welcome/>}/>
      </Routes>
  </div>
  )
}

export default RouteService