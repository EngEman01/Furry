import { NextRequest, NextResponse } from 'next/server';
import { UpdateNewPetsDto } from '@/utils/dtos'
import prisma from '@/utils/db'
import { verifyToken } from '@/utils/verifyToken';


interface GetProps {
    params: { petId: string } // this id name should be the same as the file name [petId]
}

/***
 * @method GET
 * @route  ~/api/pets/:petId
 * @des    Get Single Pet By petId
 * @access public
*/

export async function GET(request: NextRequest, { params }: GetProps) {
    try {

        const pet = await prisma.pets.findUnique({
             where: { id: parseInt(params.petId) },
             include:{
                blogs: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
             }
            })

        if (!pet) {
            return NextResponse.json({ message: "pet not found" }, { status: 404 })
        }

        return NextResponse.json(pet, { status: 200 })
    }
    catch (error) {
        return NextResponse.json(
            { message: 'internal server error', error: String(error) },
            { status: 500 }
        )
    }

}


/***
 * @method PUT
 * @route  ~/api/pets/:petId
 * @des    Update Pets By petId
 * @access public
*/

export async function PUT(request: NextRequest, { params }: GetProps) {

    try {
        const user = verifyToken(request);

        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can Get All Blog" },
                { status: 403 }
            )
        }
        const pet = await prisma.pets.findUnique({ where: { id: parseInt(params.petId) } })

        if (!pet) {
            return NextResponse.json({ message: "pet not found" }, { status: 404 })
        }

        const body = (await request.json()) as UpdateNewPetsDto;

        const UpdatedPets = await prisma.pets.update({
            where: { id: parseInt(params.petId) },
            data: {
                name: body.name,
                type: body.type,
                image: body.image,
                description: body.description,
                price: body.price,
                freeDelivery: body.freeDelivery,
                offer: body.offer
            }
        })


        return NextResponse.json(UpdatedPets, { status: 200 })
    }
    catch (error) {
        return NextResponse.json(
            { message: "internal server error", error: String(error) },
            { status: 500 }
        )
    }

}

/***
 * @method DELETE
 * @route  ~/api/pets/:petId
 * @des    Delete Pets By petId
 * @access public
*/

export async function DELETE(request: NextRequest, { params }: GetProps) {
    try {
        const user = verifyToken(request);

        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can Get All Blog" },
                { status: 403 }
            )
        }
        const pet = await prisma.pets.findUnique({ where: { id: parseInt(params.petId) } })

        if (!pet) {
            return NextResponse.json({ message: "pet not found" }, { status: 404 })
        }

        await prisma.pets.delete({ where: { id: parseInt(params.petId) } })

        return NextResponse.json({ message: "Pet Deleted" }, { status: 200 })

    }
    catch (error) {
        return NextResponse.json(
            { message: 'internal server error', error: String(error) },
            { status: 500 }
        )
    }
}
