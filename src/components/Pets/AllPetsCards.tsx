"use client";

import React, { useState, useEffect } from 'react'
import { Pets } from '@/generated/prisma/client';
import { MdOutlinePets } from "react-icons/md";
import Link from 'next/link';


interface PetsProps {
    pets: Pets
}

const AllPetsCard = ({ pets }: PetsProps) => {

    return (
        <>
            <div className='card' key={pets.id}>
                <img src={pets.image} alt="Best Sale 1" className='w-full h-80 rounded-lg' />
                <h3 className='mt-4 font-bold'>{pets.name}</h3>
                <p className='text-gray-600' style={{ fontSize: '14px' }}>
                    {pets.description}
                </p>
                <span className='text-green-800 text-center'>{pets.price}$</span>
                {/* <div className="increaments flex items-center justify-center mt-4 gap-6">
                        <button onClick={() => handleMinusToPets(pet.id)} className='border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'>-</button>
                        <h3>{counts[pet.id] || 0}</h3>
                        <button onClick={() => handleAddToPets(pet.id)} className='border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'>+</button>
                    </div> */}
                <div className="addCard flex items-center justify-center">
                    <Link href={`/pets/${pets.id}`} className='bg-[#76accd] text-white p-2 rounded-lg mt-2 flex items-center justify-center' style={{ width: '50%' }}>
                        Know More
                        <MdOutlinePets className='inline ml-2' size={20} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AllPetsCard