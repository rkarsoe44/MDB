import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import Home from './Home'
import Navbar from './Navbar'
import Search from './Search'
import "../dist/output.css"

const Main2 = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/search/:name' element={<Search/>}/>
    </Routes>
    </>
  )
}

export default Main2