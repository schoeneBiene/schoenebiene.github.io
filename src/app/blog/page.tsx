import {Suspense, lazy} from "react"

const BlogList = lazy(() => import("@/components/BlogList"))

export default function BlogHome() {
    return(
        <div className="w-full h-screen">
            <h1 className="text-center text-white text-5xl p-4 underline">Blog Posts</h1>
            <div className="text-center text-white text-xl">
                <Suspense fallback="Loading...">
                    <BlogList />
                </Suspense>
           </div>
        </div>
    )
}
