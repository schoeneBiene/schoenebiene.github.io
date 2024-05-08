import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="flex items-center justify-center flex-col h-screen w-full relative"
            style={{ top: "-100px" }}
        >
            <Image
                src="/assets/pfp.png"
                className="rounded-full overflow-hidden"
                alt="goodbee profile picture"
                width={200}
                height={200}
            />
            <div>
                <h1 className="p-4 flex align-center bottom-5 text-5xl bg-gradient-to-tr from-yellow-600 via-yellow-400 to-amber-200 text-transparent bg-clip-text font-bold lugrasimo-regular">
					goodbee
                </h1>
                <h2 className="flex flex-col items-center bottom-4 text-xl bg-gradient-to-tr from-gray-300 via-gray-200 to-gray-100 text-transparent bg-clip-text font-bold lugrasimo-regular">
					I do stuff, sometimes
                </h2>
            </div>

            <div className="inline">
                <Link href={"https://github.com/schoeneBiene"}>
                    <Image
                        src="/assets/github-mark-white.png"
                        className="p-4 rounded-full overflow-hidden size-20 inline flex-col items-center"
                        alt="github logo"
                        width={20}
                        height={20} 
                    />
                </Link>
                <Link href={"/discord/"}>
                    <Image
                        src="/assets/icon_clyde_white_RGB.png"
                        className="p-4 overflow-visible h-20 flex-col inline items-center"
                        alt="discord logo"
                        width={100}
                        height={20}
                    />
                </Link>
            </div>
        </div>
    );
}
