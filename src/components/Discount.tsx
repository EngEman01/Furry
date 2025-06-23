import Image from 'next/image'
import React from 'react'

const Discount = () => {
    return (
        <>
            <div className='w-full bg-[#f8f8f8] flex justify-center items-center p-6 flex-col sm:flex-col md:flex-row gap-6'>
                <div className='flex justify-center items-center p-6 flex-col sm:flex-col md:flex-row gap-6' style={{ width: '70%' }}>

                    <div className='w-full'>
                        <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>
                            Get
                            <span className='text-[#76accd]'> 25% Discount </span>
                            on your first purchase
                        </h1>
                        <p className='text-lg mb-4'>
                            Just Sign Up & Register it now to become member.
                        </p>
                        <input type="text" placeholder='Email' className='w-full h-11 border-1 border-gray-400 rounded-md mb-3 p-3' required/>
                        <button className='w-full h-11 bg-[#212529] text-white p-2 rounded-lg'>
                            Subscribe
                        </button>
                    </div>

                    <div className='w-full'>
                        <Image src="/pets/banner-dog.png" alt="Discount Image" width={500} height={500} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discount