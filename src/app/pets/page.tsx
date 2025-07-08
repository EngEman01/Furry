import React from 'react'
import NavSaller from '@/components/Best Saller/navSaller';
import AllPetsCards from '@/components/Pets/AllPetsCards';
import Pagination from './Pagination'
import { Pets } from '@/generated/prisma';
import { getPets, getPetsCount } from '@/APICalls/petsApiCall';
import { PET_PRE_PAGE } from '@/utils/constants';



interface petsPageProps {
  searchParams: { pageNumber: string }
}



const page = async ({ searchParams }: petsPageProps) => {

  const { pageNumber } = searchParams;

  const Pets: Pets[] = await getPets(pageNumber);

  const count = await getPetsCount();

  const pages = Math.ceil(count / PET_PRE_PAGE);

  return (
    <>
      <div className='w-full flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row'>

        <NavSaller />

        <div className='w-full flex items-center justify-center flex-col'>

          <div className='headerBest flex items-center justify-between mb-6' style={{ width: '75%' }}>

            <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Best selling products </h1>
            <button className='bg-[#76accd] text-white p-2 rounded-lg'>View all</button>

          </div>

          <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ width: '80%' }}>
            {Pets.map(pet => (
              <AllPetsCards pets={pet} key={pet.id} />
            ))}
          </div>

          <Pagination pages={pages} pageNumber={ parseInt(pageNumber) } route='pets'/>
        </div>
      </div>
    </>
  )
}

export default page