import Link from "next/link";

export default function Discord() {
    return (
        <div
            className="flex items-center justify-center flex-col h-screen w-full relative"
            style={{ top: "-100px" }}
        >
            <h1 className="text-4xl lugrasimo-regular text-white">
				Discord Username: .goodbee
            </h1>
            <Link href={"/"} className="text-gray-400 underline">
				Go back
            </Link>
        </div>
    );
}
