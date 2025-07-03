import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utils/db';
import { UpdateUsers } from "@/utils/dtos";



interface GetParams {
    params: { userId: string }
}

/***
 * @method GET
 * @route  ~/api/users/:id
 * @des    Get User by ID
 * @access public
*/

export async function GET(request: NextRequest, { params }: GetParams) {
    try {

        const user = await prisma.user.findUnique(
            { where: { id: parseInt(params.userId) } }
        )

        if (!user) {
            return NextResponse.json(
                { message: "user not found, please register first" },
                { status: 404 }
            )
        }

        return NextResponse.json(user, { status: 200 })

    }
    catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        )
    }
}


/***
 * @method PUT
 * @route  ~/api/users/:id
 * @des    Update User by ID
 * @access public
*/

export async function PUT(request: NextRequest, { params }: GetParams) {
    try {

        const user = await prisma.user.findUnique({ where: { id: parseInt(params.userId) } })

        if (!user) {
            return NextResponse.json(
                { message: 'user not found, please register first' },
                { status: 404 }
            )
        }

        const body = (await request.json()) as UpdateUsers;

        const NewUser = await prisma.user.update({

            where: { id: parseInt(params.userId) },

            data: {
                username: body.username,
                phone: body.phone,
                email: body.email,
                password: body.password,
                isAdmin: body.isAdmin
            }
        })

        return NextResponse.json(NewUser, { status: 200 })

    }

    catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        )
    }
}



/***
 * @method DELETE
 * @route  ~/api/users/:id
 * @des    Delete User by ID
 * @access public
*/

export async function DELETE(request: NextRequest, { params }: GetParams) {
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(params.userId) } })

        if (!user) {
            return NextResponse.json(
                { message: 'user not found, please register first' },
                { status: 404 }
            )
        }

        await prisma.user.delete(
            { where: { id: parseInt(params.userId) } }
        )

        return NextResponse.json(
            { message: 'user deleted successfully' },
            { status: 200 }
        )
    }
    catch (error) {
        return NextResponse.json(
            { message: 'internal servererror ' },
            { status: 500 }
        )
    }
}