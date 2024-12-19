import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <nav className="p-4">
        <div className="max-w-screen-xl py-2 mx-auto flex justify-between items-center px-6 md:px-28">
          <div
            onClick={() => navigate('/')}
            className="text-2xl cursor-pointer font-extrabold text-primary"
          >
            TrueDoc
          </div>
          {/* Desktop Nav */}
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
                FAQ
              </a>
            </li>
          </ul>

          {/* Sign-in and Get Started Buttons */}
          <div className="flex items-center justify-center space-x-2">
            <Button
              type="link"
              variant="text"
              className="text-sm hidden md:block cursor-pointer text-primary py-2 px-4 rounded-full"
            >
              Sign in
            </Button>
            <Button
              type="link"
              variant="text"
              onClick={() => navigate("/upload")}
              className="text-sm hidden md:block cursor-pointer text-primary bg-secondary shadow-md py-2 px-4 rounded-full ease-in duration-100 relative"
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
