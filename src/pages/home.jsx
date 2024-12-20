import React from 'react'
import SideDesign from '../components/side-design'
import ContentBoxes from '../components/content-boxes'
import Questionaries from '../components/questioanries'
import HowItsWorks from '../components/howitsworks'

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fff]">
      <SideDesign />
      <div className='z-10 min-h-[80vh]'>
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
        <div className='flex-1 w-full mt-20 flex items-center justify-center z-10'>
          <ContentBoxes />
        </div>
      </div>

      <div className='px-32 my-16'>
        <HowItsWorks />
      </div>

      {/* FAQ */}
      <div id='#faq' className='my-10' >
        <Questionaries />
      </div>

    </div>
  )
}

export default HomePage