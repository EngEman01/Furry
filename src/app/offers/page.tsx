import { getAllPets } from '@/APICalls/petsApiCall'
import { Pets } from '@/generated/prisma'
import AllPetsCards from '../../components/Pets/AllPetsCards'
import React from 'react'

const OffersPage = async () => {
    const allPets: Pets[] = await getAllPets()

    const filteredPets = allPets.filter(pet => pet.offer > 0)
    return (
        <>

            <div className='flex flex-col items-center justify-center w-full mb-10'>
                <div className='w-full bg-white flex justify-center items-center p-6 mt-7 flex-col'>
                    <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Offers Page</h1>
                    <p>Here you can find the latest offers on pet products!</p>
                    <p>Stay tuned for amazing discounts and deals!</p>
                </div>

                <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ width: '80%' }}>
                    {filteredPets.map(filteredPet => (
                        <div className='flex-col items-center justify-center w-full' key={filteredPet.id}>
                            <div className='relative'>
                                <AllPetsCards pets={filteredPet} />
                            <div className='absolute top-5 right-2 bg-[#e08686] p-5 rounded-4xl'>
                                <h1 className='text-white'>{filteredPet.offer}%</h1>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >


        </>
    )
}

export default OffersPage