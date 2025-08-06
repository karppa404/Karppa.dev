import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaYoutube, FaFileAlt } from "react-icons/fa"
import Plush from "@/plush.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { ModeToggle } from "./mode-toggle";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export function Nav() {
    return (
        <div className="w-full p-2">
            <div className="flex  justify-between mx-auto gap-6 ">
                {/* Logo and Brand */}
                <div className="flex items-center">
                    <Link href={"/"} className="flex items-center gap-3">
                        <Image
                            src={Plush}
                            alt="Plush Logo"
                            width={50}
                            height={50}
                            className=""
                        />
                        <h1 className="text-2xl font-bold ">Karppa</h1>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <Link
                        href={"/projects"}
                        className=" text-lg font-medium transition-colors"
                    >
                        Project
                    </Link>
                    <Link
                        href={"/blog"}
                        className=" text-lg font-medium  transition-colors"
                    >
                        Blog
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com"
                        className=" transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={28} />
                    </Link>
                    <Link
                        href="https://youtube.com"
                        className=" transition-colors"
                        aria-label="YouTube"
                    >
                        <FaYoutube size={28} />
                    </Link>
                    <Link
                        href="/resume"
                        className=" transition-colors"
                        aria-label="Resume"
                    >
                        <FaFileAlt size={26} />
                    </Link>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    )
}

export function MobileNav() {
    return (
        <div className="w-full flex justify-between align-baseline items-center p-2">
            <div className="flex items-center">
                <Link href={"/"} className="flex items-center gap-3">
                    <Image
                        src={Plush}
                        alt="Plush Logo"
                        width={50}
                        height={50}
                        className=""
                    />
                    <h1 className="text-2xl font-bold ">Karppa</h1>
                </Link>
            </div>
            <Dialog>
                <DialogTrigger>
                    <GiHamburgerMenu className="size-6" />

                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="underline">

                    <Link href={"/"} className="flex items-center gap-3">
                        <Image
                            src={Plush}
                            alt="Plush Logo"
                            width={50}
                            height={50}
                            className=""
                        />
                        </Link>

                        </DialogTitle>
                        <DialogDescription className="w-full h-full ">
                            <div className="w-full h-full flex flex-col items-center  justify-center gap-4">


                                {/* Navigation Links */}
                                <div className="flex flex-col items-center gap-3">
                                    <Link
                                        href={"/projects"}
                                        className=" text-2xl font-medium transition-colors"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href={"/blog"}
                                        className=" text-2xl font-medium  transition-colors"
                                    >
                                        Blog
                                    </Link>
                                </div>
                                <div className="flex items-center gap-4">

                                    <Link
                                        href="https://github.com"
                                        className=" transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={28} />
                                    </Link>
                                    <Link
                                        href="https://youtube.com"
                                        className=" transition-colors"
                                        aria-label="YouTube"
                                    >
                                        <FaYoutube size={28} />
                                    </Link>
                                    <Link
                                        href="/resume"
                                        className=" transition-colors"
                                        aria-label="Resume"
                                    >
                                        <FaFileAlt size={26} />
                                    </Link>
                                    <ModeToggle/>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}