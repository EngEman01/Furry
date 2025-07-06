import { NextRequest, NextResponse } from 'next/server';
import { CreateNewPetsDto } from '@/utils/dtos'
import { createPetsSchema } from '@/utils/validationSchemas'
import prisma from '@/utils/db'
import { Pets } from '@/generated/prisma';
import { verifyToken } from '@/utils/verifyToken';

/***
 * @method GET
 * @route  ~/api/pets
 * @des    Get All Pets
 * @access public
*/

export async function GET(request: NextRequest) {
    try {
        const user = verifyToken(request);

        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can Get All Blog" },
                { status: 403 }
            )
        }
        const pets = await prisma.pets.findMany();
        return NextResponse.json(pets, { status: 200 });
    } catch (error) {
        console.error('GET /api/pets error:', error);
        return NextResponse.json(
            { message: "internal server error", error: String(error) },
            { status: 500 }
        );
    }
}

/***
 * @method POST
 * @route  ~/api/pets
 * @des    Create New Pets
 * @access public 
*/

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const user = verifyToken(request);

        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can Get All Blog" },
                { status: 403 }
            )
        }
        const body = (await request.json()) as CreateNewPetsDto;

        const validation = createPetsSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
        }

        const newPets: Pets = await prisma.pets.create({
            data: {
                name: body.name,
                type: body.type,
                image: body.image,
                description: body.description,
                price: body.price,
                freeDelivery: body.freeDelivery,
                offer: body.offer
            }
        });

        return NextResponse.json(
            { message: 'Pet Created' },
            { status: 201 }
        );

    } catch (error) {
        console.error('POST /api/pets error:', error);
        return NextResponse.json(
            { message: "internal server error", error: String(error) },
            { status: 500 }
        );
    }
}