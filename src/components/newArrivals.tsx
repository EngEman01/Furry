import React from 'react'
import PestsCards from './Best Saller/petsCard';

const newArrivals = () => {
    return (
        <>
            <div className='bg-white flex-col justify-center items-center p-6 mb-5 sm:flex-col md:flex-row'  style={{ margin: '0 180px' , width: '75%'}}>

                <div className='headerBest flex items-center justify-between mb-4'>

                    <h1 className='text-3xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>New Arrivals </h1>
                    <button className='bg-[#76accd] text-white p-2 rounded-lg'>View all</button>

                </div>

                <div className='cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <PestsCards />
                </div>

            </div>
        </>
    )
}

export default newArrivals