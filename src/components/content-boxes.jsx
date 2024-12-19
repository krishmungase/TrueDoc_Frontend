import React from 'react';
import verify from "../img/Hiring6.png"
import Atropos from 'atropos/react';
import "atropos/css";
const ContentBoxes = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
       <div>
      <Atropos
      className=" w-[170px] h-[170px] text-primary relative scale-[4] " 
      shadowOffset={40}
      activeOffset={40}
      rotateXMax={25}
      rotateYMax={25}
      highlight={false}
      shadow={false}
    >
      <div style={{backgroundImage: "url('/safetylock.png')",backgroundSize:'170px 170px',opacity:0.3}} className="border border-stone-600 rounded-3xl text-2xl font-extrabold bg-turnary  p-6 h-full w-full flex justify-start">
      </div>
      <div className='absolute top-10 left-7 text-2xl font-extrabold  z-10'>Your Trust,</div>
      <div className='absolute top-16 left-8  z-10'>our</div>
      <div className='absolute top-[100px] font-extrabold text-2xl left-7  z-10'>Priority</div>
    </Atropos>
    </div>

      {/* ================ */}
      <Atropos
      className="rounded-3xl w-[300px] h-[220px] relative" 
      shadowOffset={40}
      activeOffset={40}
      rotateXMax={25}
      rotateYMax={25}
      highlight={true}
      shadow={false}
    >
      <div className="bg-turnary border rounded-3xl p-6">
        <div className='flex items-center space-x-3'>
          <div>
            <span className='text-lg font-semibold'>Verification Status</span>
          </div>
          <img className='size-16' src={verify} alt="" />
        </div>
        <p>Secure & Manage Your Documents Easily</p>
      </div>
     </Atropos>


     {/* =========================================== */}
      <div>
       <Atropos
      className=" w-[170px] h-[170px] relative" 
      shadowOffset={40}
      activeOffset={40}
      rotateXMax={25}
      rotateYMax={25}
      highlight={false}
      shadow={false}
    >
      <div style={{backgroundImage: "url('/safety.png')",backgroundSize:'170px 170px',opacity:0.3}} className="border text-primary  border-stone-600 rounded-3xl bg-turnary text-2xl font-semibold  p-6 h-full w-full flex justify-start">
      </div>
      <div className='absolute top-8 text-2xl font-semibold left-7 text-primary z-10'>Quick</div>
      <div className='absolute top-14 text-2xl font-semibold left-7 text-primary z-10'>Secure</div>
      <div className='absolute top-20 left-10  z-10 font-[500] text-primary'>& reliable <br/> <span className='text-xl'>Verification</span> </div>
    </Atropos>
    </div>

    </div>
  );
};

export default ContentBoxes;