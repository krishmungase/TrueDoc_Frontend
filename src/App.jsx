import React from 'react'
import HomePage from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App