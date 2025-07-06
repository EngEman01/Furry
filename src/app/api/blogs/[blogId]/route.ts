import prisma from "@/utils/db";
import { UpdateBlogDto } from "@/utils/dtos";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

interface GetProps {
    params: { blogId: string }
}

/***
 * @method GET
 * @route  ~/api/blogs/:id
 * @des    Get Blog by id
 * @access private (only Admin can get blog by id) 
*/

export async function GET(request: NextRequest, { params }: GetProps) {

    try {

        const blog = await prisma.blog.findUnique({
            where: { id: parseInt(params.blogId) }
        })

        if (!blog) {
            return NextResponse.json(
                { message: " Blog Not Found" },
                { status: 404 }
            )
        }

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
 * @method PUT
 * @route  ~/api/blogs/:id
 * @des    Update Blog by id
 * @access private (only Admin can update blog) 
*/

export async function PUT(request: NextRequest, { params }: GetProps) {

    try {
        const user = verifyToken(request);

        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can Get All Blog" },
                { status: 403 }
            )
        }

        const blog = await prisma.blog.findUnique({
            where: { id: parseInt(params.blogId) }
        })

        if (!blog) {
            return NextResponse.json(
                { message: " this blog not found" },
                { status: 404 }
            )
        }

        const body = (await request.json()) as UpdateBlogDto;

        const UpdatesBlog = await prisma.blog.update({
            where: { id: parseInt(params.blogId) },

            data: {
                title: body.title,
                description: body.description,
                petId: body.petId
            }

        })

        return NextResponse.json(UpdatesBlog, { status: 200 })

    }

    catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        )
    }
}

/***
 * @method DELETE
 * @route  ~/api/blogs/:id
 * @des    Delete Blog by id
 * @access private (only Admin can delete blog) 
*/

export async function DELETE(request: NextRequest, { params }: GetProps) {

    try {

        const user = verifyToken(request);

        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "only Admin can Get All Blog" },
                { status: 403 }
            )
        }

        const blog = await prisma.blog.findUnique(
            { where: { id: parseInt(params.blogId) } }
        )

        if (!blog) {
            return NextResponse.json(
                { message: " blog not found" },
                { status: 404 }
            )
        }

        await prisma.blog.delete({
            where: { id: parseInt(params.blogId) }
        })

        return NextResponse.json(
            { message: "blog deleted successfully" },
            { status: 200 }
        )

    }
    catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        )
    }
}