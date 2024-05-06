import prisma from "@/prisma";
import Link from "next/link";

export default async function BlogList() {
    const blogPosts = await prisma.blogPost.findMany();
    
    const elements = blogPosts.map((value, index) => {
        return <li key={index}>
            <Link href={"/blog/" + value.slug}>
                {value.title}
            </Link>
        </li>
    })

    return(
        <ul>
            {elements}
        </ul>
    )
}
