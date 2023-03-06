import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main2 from './Component/Main2'
import Hero from './Pages/Hero'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/Main2/*' element={<Main2/>}/>
      </Routes>
    </>
  )
}

export default App