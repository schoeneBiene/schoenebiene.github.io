import prisma from "@/prisma";
import BlogPostContent from "./BlogPostContent";

export default async function BlogPost({ slug }: { slug: string }) {
    const post = await prisma.blogPost.findUnique({
        where: {
            slug,
        }
    });

    if(post == null) {
        return(
            <div>Not found!</div>
        )
    }

    return(
        <div>
            <h1 className="p-6 text-5xl underline">{post.title}</h1>
            <BlogPostContent content={post.body} />
        </div>
    )
}
