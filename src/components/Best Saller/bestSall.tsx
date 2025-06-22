import React from 'react'
import NavSaller from './navSaller';
import PetsCards from './petsCard';


const bestSall = () => {
    return (
        <>
            <div className='w-full bg-white flex justify-center items-center p-6'>

                <NavSaller />

                <div className='w-full flex items-start justify-start flex-col'>

                    <div className='headerBest w-full flex items-center justify-between mb-6' >

                        <h1>Best Saller </h1>
                        <button className='bg-[#76accd] text-white p-2 rounded-lg'>View all</button>

                    </div>

                    <PetsCards />

                </div>
            </div>
        </>
    )
}

export default bestSall