import React from 'react'

const SideDesign = () => {
  return (
    <div className='flex items-center justify-center lg:justify-end'>
      <div className="hidden lg:block">
        <div className="w-[500px] h-[843px] rounded-full bg-secondary absolute z-10 -top-[10px] -left-[342px]" />
      </div>
      <div className="hidden lg:block">
        <div className="w-[500px] h-[843px] rounded-full bg-secondary absolute z-10 -top-[18px] -right-[350px]" />
      </div>
    </div>
  )
}

export default SideDesign