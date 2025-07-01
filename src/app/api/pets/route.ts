import { NextRequest, NextResponse } from 'next/server';
import { Pets } from '@/utils/data';
import { pet } from '@/utils/types';
import { CreateNewPetsDto } from '@/utils/dtos'
import { createPetsSchema } from '@/utils/validationSchemas'


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


/***
 * @method GET
 * @route  ~/api/pets
 * @des    Get All Pets
 * @access public
*/

export function GET(request: NextRequest): NextResponse<pet[]> {
    return NextResponse.json(Pets, { status: 200 });
}



/***
 * @method POST
 * @route  ~/api/pets
 * @des    Create New Pets
 * @access public 
*/

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body = (await request.json()) as CreateNewPetsDto;



    const validation = createPetsSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json({ message: validation.error.errors[0].message }  , {status : 400 })
    }

    const newPets: pet = {
        name: body.name,
        image: body.image,
        description: body.description,
        price: body.price,
        freeDelivery: body.freeDelivery,
        offer: body.offer,
        id: Pets.length + 1
    }

    Pets.push(newPets);
    return NextResponse.json(newPets, { status: 201 })
}