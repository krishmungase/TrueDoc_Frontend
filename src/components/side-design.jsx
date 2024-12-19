import React from 'react'

const SideDesign = () => {
  return (
    <div className='flex items-center justify-center lg:justify-end'>
      <div className="hidden lg:block">
        {/* <div className="w-[500px] h-[843px] rounded-full bg-secondary absolute z-10 -top-[10px] -left-[342px]" /> */}
        <div className="w-[500px] h-[843px] z-100 rounded-[49%_50%_0%_0%/100%_100%_0%_0%] bg-gradient-to-br from-secondary to-white absolute z-10  -left-[250px]" />
      </div>
      <div className="hidden lg:block">
        {/* <div className="w-[500px] h-[843px] rounded-full bg-secondary absolute z-10 -top-[18px] -right-[350px]" /> */}
        <div className="w-[500px] h-[843px] z-100 rounded-[49%_50%_0%_0%/100%_100%_0%_0%] bg-gradient-to-bl from-secondary to-white absolute z-10  -right-[250px]" />
      </div>
    </div>
  )
}

export default SideDesign