import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/">
            <Image

                height={50}
                width={120}
                alt="logo"
                src={"/logo.svg"}
                className="h-[90px] w-auto py-4"
            />
        </Link>
    )
}

export default Logo