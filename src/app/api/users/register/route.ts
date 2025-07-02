import { NextRequest, NextResponse } from "next/server";
import { CreateNewUsers } from '@/utils/dtos'
import { createUserSchema } from '@/utils/validationSchemas'
import prisma from '@/utils/db'
import { User } from "@/generated/prisma";

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

        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({ where: { email: body.email } });

        if(user){
            return NextResponse.json(
                {message: "this user already registered"},
                {status: 400 }
            )
        }

        const NewUser = await prisma.user.create({

            data: {
                username: body.username,
                phone: body.phone,
                email: body.email,
                password: body.password,
            }

        });

        return NextResponse.json(
            { message: "user created" },
            { status: 201 }

        )

    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }

        )
    }
}