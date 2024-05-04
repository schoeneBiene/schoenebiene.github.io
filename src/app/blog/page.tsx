import {Suspense, lazy} from "react"

const BlogList = lazy(() => import("@/components/BlogList"))

export default function BlogHome() {
    return(
        <div className="w-full h-screen">
            <div className="text-center text-white text-xl">
                <Suspense fallback="Loading...">
                    <BlogList />
                </Suspense>
           </div>
        </div>
    )
}
