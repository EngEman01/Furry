import React from 'react'
import { Pets } from '@/generated/prisma';
import AllPetsCards from '../../components/Pets/AllPetsCards'
import { getAllPets } from '@/APICalls/petsApiCall';

const FreeDelivery = async () => {
    const allPets: Pets[] = await getAllPets()

    const filteredPets = allPets.filter(pet => pet.freeDelivery === true);
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full mb-10'>
                <div className='w-full bg-white flex flex-col justify-center items-center p-6 mt-7 md:flex-col sm:flex-row'>
                    <h1 className='text-5xl mb-6 text-[#76accd]' style={{ fontFamily: '"Chewy", system-ui' }}>Free Delivery</h1>
                    <p>Enjoy free delivery on all orders over $50!</p>
                    <p>Fast and reliable shipping to your doorstep.</p>
                </div>

                <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ width: '80%' }}>
                    {filteredPets.map(filteredPet => (
                        <AllPetsCards pets={filteredPet} key={filteredPet.id} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default FreeDelivery