import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utils/db';
import { UpdateUsers } from "@/utils/dtos";
import { verifyToken } from "@/utils/verifyToken";
import bcrypt from "bcryptjs";



interface GetParams {
    params: { userId: string }
}

/***
 * @method GET
 * @route  ~/api/users/profile/:id
 * @des    Get User by ID
 * @access private (only the user himself can open his profile)
*/

export async function GET(request: NextRequest, { params }: GetParams) {
    try {

        const user = await prisma.user.findUnique(
            {
                where: { id: parseInt(params.userId) },
                select: {
                    id: true,
                    username: true,
                    phone: true,
                    email: true,
                    isAdmin: true,
                }
            }
        )

        if (!user) {
            return NextResponse.json(
                { message: "user not found, please register first" },
                { status: 404 }
            )
        }

        const userFromToken = verifyToken(request);

        if (userFromToken !== null && userFromToken.id !== user.id) {
            return NextResponse.json(
                { mesaage: "you are not allowed, you can only access your own profile" },
                { status: 403 }
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
 * @route  ~/api/users/profile/:id
 * @des    Update User by ID
 * @access private (only the user himself can open his profile)
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

        const userFromToken = verifyToken(request);

        if (userFromToken !== null && userFromToken.id !== user.id) {
            return NextResponse.json(
                { message: "you are not allowed, you can only update your own profile" },
                { status: 403 }
            )
        }

        const body = (await request.json()) as UpdateUsers;

        if (body.password) {
            if(body.password.length < 6) {
                return NextResponse.json(
                    {message: "password must be at least 6 characters long"},
                    { status: 400 }
                )
            }
            const salt = await bcrypt.genSalt(10);
            body.password = await bcrypt.hash(body.password, salt);
        }

        const updatedUser = await prisma.user.update({

            where: { id: parseInt(params.userId) },

            data: {
                username: body.username,
                phone: body.phone,
                email: body.email,
                password: body.password
            },
            select:{
                id: true,
                username: true,
                phone: true,
                email: true,
                isAdmin: true,
            }
        })

        return NextResponse.json(updatedUser, { status: 200 })

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
 * @route  ~/api/users/profile/:id
 * @des    Delete User's Profile
 * @access private (only the user himself can delete his profile)
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

        // get data manual from request header
        // const authToken = request.headers.get('authToken') as string;


        const userFromToken = verifyToken(request);

        if (userFromToken !== null && userFromToken.id === user.id) {
            await prisma.user.delete({ where: { id: parseInt(params.userId) } });

            return NextResponse.json(
                { message: 'user deleted successfully' },
                { status: 200 }
            )
        }

        return NextResponse.json(
            { message: "only user himself can delete his profile, forbidden" },
            { status: 403 }
        )

    }
    catch (error) {
        return NextResponse.json(
            { message: 'internal servererror ' },
            { status: 500 }
        )
    }
}