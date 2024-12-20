import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar"
import HomePage from "./pages/home"
import UploadPage from "./pages/upload"
import Footer from './components/footer'

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App