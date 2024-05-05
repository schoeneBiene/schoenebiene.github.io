import Link from "next/link";
import { Suspense, lazy } from "react";

const BlogList = lazy(() => import("@/components/BlogList"));

export default function BlogHome() {
    return (
        <div className="w-full h-screen">
            <div className="flex items-center justify-center p-4 relative">
                <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2 text-white underline text-lg">
                    Go back
                </Link>
                <h1 className="text-center text-white text-5xl p-4 underline">Blog Posts</h1>
            </div>
            <div className="text-center text-white text-xl">
                <Suspense fallback="Loading...">
                    <BlogList />
                </Suspense>
            </div>
        </div>
    );
}

