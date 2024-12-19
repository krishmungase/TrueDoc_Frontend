import React from 'react'
import HomePage from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import UploadPage from './pages/upload'

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  )
}

export default App