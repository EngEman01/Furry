import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='sliderSection flex flex-col text-white bg-gray-200'>
        <h5 className='font-bold' style={{fontSize:'30px'}}>Premium pet supplies for happy tails</h5>
        <h1 className='mb-4' style={{ fontFamily: '"Chewy", system-ui', fontSize:'150px' }}>PET SHOP</h1>
        <button className='bg-[#76accd] p-4 rounded-xl w-40 font-bold text-xl'>Shop Now</button>
      </div>
    </>
  )
}

export default HeroSection;