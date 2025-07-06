import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

/***
 * @method GET
 * @route  ~/api/pets/search?searchText=value
 * @des    Get Pets by Sreach Text
 * @access public
*/


export async function GET(request: NextRequest) {
    try {

        const searchText = request.nextUrl.searchParams.get('searchText');
        let searchPets;
        if (searchText) {
            searchPets = await prisma.pets.findMany({
                where: {
                    name:
                    {
                        startsWith: searchText,
                        mode: 'insensitive' // Case insensitive search
                    }
                }
            })

        } else {
            searchPets = await prisma.pets.findMany({
                take: 9
            })
        }

        return NextResponse.json(searchPets, { status: 200 });

    }
    catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        )
    }
}