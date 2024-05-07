import prisma from "@/prisma";
import {MetadataRoute} from "next";

export default async function sitemap() {
    const posts = await prisma.blogPost.findMany();
    
    return posts.map((post) => ({
        url: `/blog/${post.slug}`
    }));
}
