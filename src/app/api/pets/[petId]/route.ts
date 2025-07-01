import { NextRequest, NextResponse } from 'next/server';
import { Pets } from '@/utils/data';
import { UpdateNewPetsDto } from '@/utils/dtos'
import { pet } from '@/utils/types';

interface GetProps {
    params: { id: string }
}

/***
 * @method GET
 * @route  ~/api/pets/:id
 * @des    Get Single Pet By id
 * @access public
*/

export function GET(request: NextRequest, { params }: GetProps) {
    const pet = Pets.find(a => a.id === parseInt(params.id))

    if (!pet) {
        return NextResponse.json({ message: "pet not found" }, { status: 404 })
    }

    return NextResponse.json(pet, { status: 200 })

}
 

/***
 * @method PUT
 * @route  ~/api/pets/:id
 * @des    Update Pets By id
 * @access public
*/

export async function PUT(request: NextRequest, { params }: GetProps) {
    const pet = Pets.find(a => a.id === parseInt(params.id))

    if (!pet) {
        return NextResponse.json({ message: "pet not found" }, { status: 404 })
    }

    const body = (await request.json()) as UpdateNewPetsDto;

    console.log(body);


    return NextResponse.json({ message : "Pet Updated"}, { status: 200 })

} 

/***
 * @method DELETE
 * @route  ~/api/pets/:id
 * @des    Delete Pets By id
 * @access public
*/

export async function DELETE(request: NextRequest, { params }: GetProps) {
    const pet = Pets.find(a => a.id === parseInt(params.id))

    if (!pet) {
        return NextResponse.json({ message: "pet not found" }, { status: 404 })
    }


    return NextResponse.json({messga : "Pet Deleted"}, { status: 200 })

} 
