import Image from "next/image";

export default function Lividi() {
    return (
        <div id="lividi" className="relative w-full">
            <Image
                src="/lividibg.png"
                alt=""
                width={1600}
                height={900}
                sizes="100vw"
                className="block w-full h-auto"
            />
        </div>
        
    );
};