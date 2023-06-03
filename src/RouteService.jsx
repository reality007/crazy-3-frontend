import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';

const RouteService = () => {
  return (
    <div >
       <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/user' element = {<Welcome/>}/>
      </Routes>
  </div>
  )
}

export default RouteService