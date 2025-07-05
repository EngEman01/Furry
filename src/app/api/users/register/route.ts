import { NextRequest, NextResponse } from "next/server";
import { CreateNewUsers } from '@/utils/dtos'
import { createUserSchema } from '@/utils/validationSchemas'
import prisma from '@/utils/db'
import { User } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { JWTPayload } from "@/utils/types";
import { generateCookies } from "@/utils/generateToken";

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

        if (user) {
            return NextResponse.json(
                { message: "this user already registered" },
                { status: 400 }
            )
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        const NewUser: User = await prisma.user.create({

            data: {
                username: body.username,
                phone: body.phone,
                email: body.email,
                password: hashedPassword,
            }

        });


        const payload: JWTPayload = {
            id: NewUser.id,
            username: NewUser.username,
            isAdmin: NewUser.isAdmin
        }

        const cookie = generateCookies(payload);

        return NextResponse.json(
            // { message: "user created" },
            { ...NewUser, message: "user created successfully" },
            {
                status: 201,
                headers: { "Set-Cookie": cookie }
            }

        )

    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }

        )
    }
}