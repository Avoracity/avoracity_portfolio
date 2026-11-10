import Image from "next/image";

export default function Introgami() {
    return (
        <div id="introgami" className="relative w-full">
            <Image
                src="/introgamibg.png"
                alt=""
                width={1600}
                height={900}
                sizes="100vw"
                className="block w-full h-auto"
            />
        </div>
    );
}