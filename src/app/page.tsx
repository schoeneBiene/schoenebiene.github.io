import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="flex items-center justify-center flex-col h-screen w-full relative"
            style={{ top: "-100px" }}
        >
            <Image
                src="https://utfs.io/f/97678266-6d12-4156-aeb1-815c413b3bbe-rrzghg.png"
                className="rounded-full overflow-hidden"
                alt="goodbee profile picture"
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
                        src="https://utfs.io/f/393f927e-8212-405f-86f7-8541cb1e72a0-wqv0b7.png"
                        className="p-4 rounded-full overflow-hidden size-20 inline flex-col items-center"
                        alt="github logo"
                    />
                </Link>
                <Link href={"/discord/"}>
                    <Image
                        src="https://utfs.io/f/a3585068-cddd-4f15-9f4f-4795304e20ad-5751dp.png"
                        className="p-4 overflow-visible h-20 flex-col inline items-center"
                        alt="discord logo"
                    />
                </Link>
            </div>
        </div>
    );
}
