import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <nav className="p-4">
        <div className="max-w-screen-xl py-2 mx-auto flex justify-between items-center px-6 md:px-28">
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="text-2xl cursor-pointer font-extrabold text-primary"
          >
            TrueDoc
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#how-it-works" className="text-sm text-primary">
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="text-sm text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-sm text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm text-primary">
                FAQs
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center justify-center space-x-2">
            <Button
              type="link"
              className="text-sm hidden md:block text-primary py-2 px-4 rounded-full"
              onClick={() => navigate('/signin')}
            >
              Sign in
            </Button>
            <Button
              type="primary"
              className="text-sm hidden md:block bg-primary text-center shadow-md py-2 px-4 rounded-full"
              onClick={() => navigate('/upload')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
