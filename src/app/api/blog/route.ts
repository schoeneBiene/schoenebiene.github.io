import prisma from "@/prisma";

interface CreateBlogRequest {
    slug: string,
    title: string,
    body: string,
    secret: string
}

export async function POST(req: Request) {
    let postData: CreateBlogRequest;

    try {
        postData = await req.json();
    } catch(_err) {
        return new Response("Bad Request", {
            status: 400
        })
    }

    if(!(postData.secret === process.env.CREATION_SECRET)) {
        return new Response("Unauthorized", {
            status: 401
        })
    }

    const blogPost = await prisma.blogPost.create({
        data: {
            slug: postData.slug,
            title: postData.title,
            body: postData.body
        }
    });

    return new Response(blogPost.slug , {
        status: 200
    })
}
