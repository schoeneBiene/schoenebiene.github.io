import {Suspense, lazy} from "react"

const BlogPost = lazy(() => import("@/components/BlogPost"))

export const metadata = {
    title: "goodbee's blog"
}

export default function BlogPage({ params }: { params: { slug: string } }) {
    return(
        <div className="text-white text-center">
            <div>
                <Suspense fallback="Loading...">
                    <BlogPost slug={params.slug} />
                </Suspense>
            </div>
        </div>
    )
}
