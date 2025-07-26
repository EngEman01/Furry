import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


/***
 * @method GET
 * @route  ~/api/pets/all
 * @des    Get All Pets
 * @access public
*/

export async function GET(request: NextRequest) {

    try {

        const pets = await prisma.pets.findMany()

        return NextResponse.json(pets, { status: 200 })

    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        )
    }

}