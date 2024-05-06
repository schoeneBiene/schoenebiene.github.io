import prisma from "@/prisma";
import {revalidatePath} from "next/cache";
import crypto from "crypto";

interface CreateBlogRequest {
    slug: string,
    title: string,
    body: string,
    secret: string
}

interface DeleteBlogRequest {
    slug: string,
    secret: string
}

interface PatchBlogRequest {
    slug: string,
    title?: string,
    body?: string,
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

    
    if(!postData.slug || !postData.title || !postData.body || !postData.secret) {
        return new Response("Bad Request", {
            status: 400
        })
    }
    
    if(process.env.CREATION_SECRET == undefined) {
        return new Response("Internal Server Error", {
            status: 500
        })
    }

    if(!(crypto.timingSafeEqual(Buffer.from(postData.secret), Buffer.from(process.env.CREATION_SECRET || "")))) {
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

    revalidatePath("/blog");

    return new Response(blogPost.slug , {
        status: 200
    })
}

export async function DELETE(req: Request) {
    let postData: DeleteBlogRequest;

    try {
        postData = await req.json();
    } catch(_err) {
        return new Response("Bad Request", {
            status: 400
        })
    }


    if(!postData.slug || !postData.secret) {
        return new Response("Bad Request", {
            status: 400
        })
    }
    
    if(process.env.CREATION_SECRET == undefined) {
        return new Response("Internal Server Error", {
            status: 500
        })
    }

    if(!(crypto.timingSafeEqual(Buffer.from(postData.secret), Buffer.from(process.env.CREATION_SECRET || "")))) {
        return new Response("Unauthorized", {
            status: 401
        })
    }

    const blogPost = await prisma.blogPost.delete({
        where: {
            slug: postData.slug
        }
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${postData.slug}`);

    return new Response("", {
        status: 200
    })

}

export async function PATCH(req: Request) {
    let postData: PatchBlogRequest;

    try {
        postData = await req.json();
    } catch(_err) {
        return new Response("Bad Request", {
            status: 400
        })
    }


    if(!postData.slug || !postData.secret) {
        return new Response("Bad Request", {
            status: 400
        })
    }
    
    if(process.env.CREATION_SECRET == undefined) {
        return new Response("Internal Server Error", {
            status: 500
        })
    }

    if(!(crypto.timingSafeEqual(Buffer.from(postData.secret), Buffer.from(process.env.CREATION_SECRET || "")))) {
        return new Response("Unauthorized", {
            status: 401
        })
    }

    const blogPost = await prisma.blogPost.update({
        where: {
            slug: postData.slug
        },
        data: {
            title: postData.title,
            body: postData.body
        }
    });
    
    revalidatePath("/blog");
    revalidatePath(`/blog/${postData.slug}`);

    return new Response("OK", {
        status: 200
    });
}
