import React from 'react'
import { Pets } from '@/generated/prisma'
import { IoCart } from "react-icons/io5";


interface SinglePetsProps {
  params: { petsId: string }
}

const SinglePage = async ({ params }: SinglePetsProps) => {

  const res = await fetch(`http://localhost:3000/api/pets/${params.petsId}`)

  if (!res.ok) {
    throw new Error("there is error in fetch data ")
  }

  const pet: Pets = await res.json()

  return (
    <>
      <div className='w-full min-h-screen flex-col items-center justify-center p-5 gap-100'>

        <div className='w-fll flex items-center justify-center'>
          <img src={pet.image} alt="" className='rounded-2xl w-150 h-150' />
        </div>

        <div className='w-full flex-col items-center justify-center'>

          <div className='w-full flex-col items-center justify-center'>
            
            <h1>{pet.name}</h1>
            <p>{pet.description}</p>
            <p className='text-green-700'>{pet.price}$</p>

          </div>

          <div>
            <button className='bg-[#76accd] text-white p-3 rounded-2xl flex items-center justify-center gap-3 text-xl'>
             <span>Buy Now </span>
              <IoCart className='text-xl'/>
              </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default SinglePage