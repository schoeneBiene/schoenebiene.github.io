import {Suspense, lazy} from "react"

const BlogList = lazy(() => import("@/components/BlogList"))

export default function BlogHome() {
    return(
        <div>
           <Suspense fallback="Loading...">
            <BlogList />
           </Suspense>
        </div>
    )
}
