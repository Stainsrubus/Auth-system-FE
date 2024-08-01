import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Components/Pages/Login';
import SignUp from '../Components/Pages/SignUp';
import Profile from '../Components/Pages/Profile';
function AppRoutes() {
  return (
   <>
   <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/profile' element={<Profile />}/>
   </Routes>
   </>
  )
}

export default AppRoutes
