import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

/***
 * @method GET
 * @route  ~/api/users
 * @des    Create New User (REgister / Sign Up)
 * @access public
*/


export async function GET(request: NextRequest) {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        );
    }
}