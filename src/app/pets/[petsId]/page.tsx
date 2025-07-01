import React from 'react'
import { pet } from '@/utils/types'


interface SinglePetsProps {
  params: { petsId: string }
}

const SinglePage = async ({ params }: SinglePetsProps) => {
  // console.log(params);

  const res = await fetch(`http://localhost:3000/api/pets/${params.petsId}`)

  if (!res.ok) {
    throw new Error("there is error in fetch data ")
  }

  const pet: pet = await res.json()

  return (
    // <div>{pet.name}</div>
    <div>hi</div>
  )
}

export default SinglePage