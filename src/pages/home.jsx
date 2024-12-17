import React from 'react'
import SideDesign from '../components/side-design'
import ContentBoxes from '../components/content-boxes'

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SideDesign />
      <div className='z-10'>
        <div className="flex-1 flex items-center flex-col justify-center z-10 py-16">
          <div className="flex items-center justify-center space-x-2">
            <h1 className="text-primary font-semibold text-[50px]">Upload.</h1>
            <h1 className="text-primary font-semibold text-[50px]">Verify.</h1>
            <h1 className="text-primary font-semibold text-[50px]">Trust</h1>
          </div>
          <div>
            <p className='text-md text-primary'>Your documents verified securely, ensuring trust and simplicity at every step.</p>
          </div>
        </div>
        <div className='flex-1 w-full flex items-center justify-center z-10'>
          <ContentBoxes />
        </div>
      </div>
    </div>
  )
}

export default HomePage