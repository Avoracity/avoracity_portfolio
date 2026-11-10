

import Image from "next/image";

export default function Tmania() {
    return (
        <div id="tmania" className="relative w-full">
            <Image
                src="/tmaniabg.png"
                alt=""
                width={1600}
                height={900}
                sizes="100vw"
                className="block w-full h-auto"
            />
        </div>
    );
}