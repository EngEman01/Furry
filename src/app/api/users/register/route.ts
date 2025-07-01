import { NextRequest, NextResponse } from "next/server";
import { CreateNewUsers } from '@/utils/dtos'
import { PrismaClient } from '@prisma/client'
import { createUserSchema } from '@/utils/validationSchemas'


const prisma = new PrismaClient();

/***
 * @method POST
 * @route  ~/api/users/register
 * @des    Create New User (REgister / Sign Up)
 * @access public
*/

export async function POST(request: NextRequest) {
    try {

        const body = (await request.json()) as CreateNewUsers;

        // validation using zod 
        const validation = createUserSchema.safeParse(body)

        if(!validation.success){ return NextResponse.json(
                    { message: validation.error.errors[0].message },
                    { status: 400 }
        )}

        // const NewUser: User = {
        //     username: body.username,
        //     email: body.email,
        //     password: body.password,
        //     id: User.length + 1
        // }

        //     return NextResponse.json(
        //     { message: "user created" },
        //     { status: 200 }

        // )

    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }

        )
    }
}