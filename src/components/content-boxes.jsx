import React from 'react';
import verify from "../img/Hiring6.png"

const ContentBoxes = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
      <div className=" bg-turnary border shadow-lg rounded-2xl p-6">
        Box 1
      </div>
      <div className="bg-turnary border shadow-lg rounded-2xl p-6">
        <div className='flex items-center space-x-3'>
          <div>
            <span className='text-lg font-semibold'>Verification Status</span>
          </div>
          <img className='size-16' src={verify} alt="" />
        </div>
        <p>Secure & Manage Your Documents Easily</p>
      </div>
      <div className="bg-turnary border shadow-lg rounded-2xl p-6">
        Box 3
      </div>
    </div>
  );
};

export default ContentBoxes;