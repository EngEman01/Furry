import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='sliderSection flex flex-col text-white bg-gray-200'>
        <h5 style={{fontSize: '30px'}}>Premium pet supplies for happy tails</h5>
        <h1 style={{ fontFamily: 'Chewy, system-ui' , fontSize: '130px'}}>Pet Shop</h1>
        <button className='bg-[#76accd] p-3 rounded-xl m-3 w-30'>Shop Now</button>
      </div>
    </>
  )
}

export default HeroSection;