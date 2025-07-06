import prisma from "@/utils/db";
import { CreateNewBlogDto } from "@/utils/dtos";
import { createBlogSchema } from "@/utils/validationSchemas";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";



/***
 * @method GET
 * @route  ~/api/blogs
 * @des    Get All  Blogs
 * @access private (only Admin can get all blogs) 
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

        const blog = await prisma.blog.findMany()

        return NextResponse.json(blog, { status: 200 })

    }
    catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        )
    }
}



/***
 * @method POST
 * @route  ~/api/blogs
 * @des    Create New Blog
 * @access public 
*/


export async function POST(request: NextRequest) {

    try {

        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can create a new blog" },
                { status: 403 }
            )
        }

        const body = (await request.json()) as CreateNewBlogDto;

        const validation = createBlogSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            )
        }

        const NewBlog = await prisma.blog.create({
            data: {
                title: body.title,
                description: body.description,
                petId: body.petId
            }
        })

        return NextResponse.json(
            { meaage: "Blog created successfully" },
            { status: 200 }
        )

    }
    catch (error) {
        return NextResponse.json(
            { message: "internal server error", error },
            { status: 500 }
        )
    }

}