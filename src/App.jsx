import React from 'react'
import HomePage from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import UploadPage from './pages/upload'

const App = () => {
  return (
<<<<<<< HEAD
    <div className="w-screen min-h-screen flex flex-col"> 
=======
    <div className="min-h-screen flex flex-col">
>>>>>>> refs/remotes/origin/master
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  )
}

export default App