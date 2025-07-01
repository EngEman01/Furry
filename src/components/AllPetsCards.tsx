"use client";

import React, { useState, useEffect } from 'react'
import { pet } from '@/utils/types';
import { MdOutlinePets } from "react-icons/md";
import Link from 'next/link';

const AllPetsCard = () => {
    const [petList, setPetList] = useState<pet[]>([]);
    // Store count per pet id
    const [counts, setCounts] = useState<{ [id: number]: number }>({});

    const handleAddToPets = (id: number) => {
        setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };
    const handleMinusToPets = (id: number) => {
        setCounts(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
    };

    useEffect(() => {
        const fetchPets = async () => {
            const response = await fetch('http://localhost:3000/api/pets');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const Pets: pet[] = await response.json();
            setPetList(Pets);
        };
        fetchPets();
    }, []);

    return (
        <>
            {petList.map(pet => (
                <div className='card' key={pet.id}>
                    <img src={pet.image} alt="Best Sale 1" className='w-full h-80 rounded-lg' />
                    <h3 className='mt-4 font-bold'>{pet.name}</h3>
                    <p className='text-gray-600' style={{ fontSize: '14px' }}>
                        {pet.description}
                    </p>
                    <span className='text-green-800 text-center'>${pet.price}</span>
                    <div className="increaments flex items-center justify-center mt-4 gap-6">
                        <button onClick={() => handleMinusToPets(pet.id)} className='border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'>-</button>
                        <h3>{counts[pet.id] || 0}</h3>
                        <button onClick={() => handleAddToPets(pet.id)} className='border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'>+</button>
                    </div>
                    <div className="addCard flex items-center justify-center">
                        <Link href={`/pets/${pet.id}`} className='bg-[#76accd] text-white p-2 rounded-lg mt-2 flex items-center justify-center' style={{ width: '50%' }}>
                            Know More
                            <MdOutlinePets className='inline ml-2' size={20} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AllPetsCard