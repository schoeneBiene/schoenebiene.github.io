import {Suspense, lazy} from "react"

const BlogPost = lazy(() => import("@/components/BlogPost"))

export default function BlogPage({ params }: { params: { slug: string } }) {
    return(
        <div className="w-full h-screen text-white text-center">
            <div>
                <Suspense fallback="Loading...">
                    <BlogPost slug={params.slug} />
                </Suspense>
            </div>
        </div>
    )
}
