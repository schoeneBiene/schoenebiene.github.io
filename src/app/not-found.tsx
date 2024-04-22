import Link from "next/link";

export default function Custom404() {
	return (
		<div
			className="flex items-center justify-center flex-col h-screen w-full relative"
			style={{ top: "-100px" }}
		>
			<h1 className="text-4xl lugrasimo-regular text-white p-2">404</h1>
			<p className="text-gray-400 text-sm p-2">
				The page you are looking for could not be found.
			</p>
			<Link href={"/"} className="text-gray-400 underline p-2">
				Go back
			</Link>
		</div>
	);
}
