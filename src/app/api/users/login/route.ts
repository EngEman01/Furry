import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utils/db';
import { LoginUsers } from "@/utils/dtos";
import { loginUserSchema } from "@/utils/validationSchemas";
import bcrypt from "bcryptjs";
import { generateJWT } from "@/utils/generateToken";
import { JWTPayload } from "@/utils/types";


/***
 * @method POST
 * @route  ~/api/users/login
 * @des    Get User by ID (Login / Sign in)
 * @access public
*/

export async function POST(request: NextRequest) {

    try {
        const body = (await request.json()) as LoginUsers;

        const validation = loginUserSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({ where: { email: body.email } })

        if (!user) {
            return NextResponse.json(
                { message: 'user not found, please register first' },
                { status: 404 }
            )
        }

        const isPasswordMatch = await bcrypt.compare(body.password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json(
                { message: "invalid email or password" },
                { status: 400 }
            )
        }

        const payload : JWTPayload = {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin
        }

        const token = generateJWT(payload);

        return NextResponse.json(
            { message: "Authenticated successfully", token },
            { status: 200 }
        )

    }
    catch (error) {
        NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        )
    }
}