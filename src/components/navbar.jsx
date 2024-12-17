import { Button } from 'antd'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto -z-10'>
      <nav className="p-4">
        <div className="max-w-screen-xl py-2 mx-auto flex justify-between items-center px-28">
          <a href="/" className="text-2xl font-extrabold text-primary relative z-10">TrueDoc</a>
          <ul className="flex space-x-6">
            <li>
              <a href="#how-it-works" className="text-sm text-primary relative z-10">
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="text-sm text-primary relative z-10">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-sm text-primary relative z-10">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm text-primary relative z-10">
                FAQ
              </a>
            </li>
          </ul>
          <div className='flex items-center justify-center space-x-2'>
            <Button
              type="link"
              variant='text'
              className="text-sm cursor-pointer text-primary py-2 px-4 rounded-full relative z-10"
            >
              Sign in
            </Button>
            <Button
              type="link"
              variant='text'
              className="text-sm cursor-pointer text-primary bg-secondary shadow-md py-2 px-4 rounded-full ease-in duration-100 relative z-10"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
