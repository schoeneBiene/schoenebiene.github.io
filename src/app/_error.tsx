export default function Error({ statusCode }: { statusCode: number }) {
    return (
        <div
            className="flex items-center justify-center flex-col h-screen w-full relative"
            style={{ top: "-100px" }}
        >
            <h1 className="text-4xl lugrasimo-regular text-white p-2">
                {statusCode}
            </h1>
            <p className="text-gray-400 text-sm p-2">An error occured.</p>
        </div>
    );
}
