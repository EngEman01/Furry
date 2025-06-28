import Image from 'next/image'
import React from 'react'

const blog = () => {
    return (
        <>
            <div className='bg-white flex-col justify-center items-center p-6 cursor-pointer sm:flex-col md:flex-row' style={{ margin: '0 180px', width: '75%' }}>

                <div className='headerBest flex items-center justify-between mb-4'>

                    <h1 className='text-3xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Our recent blog</h1>
                    <button className='bg-[#76accd] text-white p-2 rounded-lg'>View all</button>

                </div>

                <div className='cards grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='border-1 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div>
                            <Image
                                src="/pets/product-thumbnail-3.jpg"
                                alt="Blog Image 1"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg mb-4"
                            />
                        </div>

                        <div>
                            <div className="date mb-3">
                                <p className="text-gray-500 text-sm">22 Aug 2021</p>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: '"Chewy", system-ui' }}>
                                Tips for Keeping Your Furry Friend Happy and Healthy
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam...                            </p>
                        </div>
                    </div>
                    <div className='border-1 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div>
                            <Image
                                src="/pets/product-thumbnail-4.jpg"
                                alt="Blog Image 1"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg mb-4"
                            />
                        </div>

                        <div>
                            <div className="date mb-3">
                                <p className="text-gray-500 text-sm">22 Aug 2021</p>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: '"Chewy", system-ui' }}>
                                Tips for Keeping Your Furry Friend Happy and Healthy
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam...                            </p>
                        </div>
                    </div>
                    <div className='border-1 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div>
                            <Image
                                src="/pets/product-thumbnail-8.jpg"
                                alt="Blog Image 1"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg mb-4"
                            />
                        </div>

                        <div>
                            <div className="date mb-3">
                                <p className="text-gray-500 text-sm">22 Aug 2021</p>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: '"Chewy", system-ui' }}>
                                Tips for Keeping Your Furry Friend Happy and Healthy
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam...                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default blog