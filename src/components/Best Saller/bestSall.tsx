import React from 'react'
import NavSaller from './navSaller';
import PetsCards from './petsCard';


const bestSall = () => {
    return (
        <>
            <div className='w-full bg-white flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row'>

                <NavSaller />

                <div className='w-full flex items-center justify-center flex-col'>

                    <div className='headerBest flex items-center justify-between mb-6' style={{ width: '75%' }}>

                        <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Best selling products </h1>
                        <button className='bg-[#76accd] text-white p-2 rounded-lg'>View all</button>

                    </div>

                    <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ width: '80%' }}>

                        <PetsCards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default bestSall