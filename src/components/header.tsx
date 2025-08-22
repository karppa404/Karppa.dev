import { FaGithub, FaYoutube, FaLinkedin, FaRss } from "react-icons/fa";
import { FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { BsSubstack } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

export default function Header() {
    return (

        <div className="w-fit">
            <div className="w-full h-full flex flex-col items-center  p-2" >
                {/* Header Image */}
                <div className="relative w-full rounded-2xl ">
                    <img src="bg.jpg" alt="Header" className="w-full h-full object-cover rounded-xl " />
                    <div className="absolute -bottom-10 left-2 md:left-6 rounded-2xl ">
                        <img src="/img.png" alt="Profile Icon" className="w-1/3 md:w-1/2  border-4 md:border-8  border-background rounded-2xl" />
                    </div>
                </div>

                <div className="w-full flex-col justify-center md:px-6 px-2 mt-12">
                    <h1 className="text-3xl font-bold">
                        Karppa
                    </h1>
                    <div className=" text-left w-full text-xl">
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <h1>Dallas, TX</h1>
                        </div>
                        <div className="flex items-center  space-x-2 mt-2">
                            <FaUniversity />
                            <h1>UTD</h1>
                        </div>
                    </div>
                    <div className="flex space-x-6 mt-4 text-sm" >
                        < a href="https://github.com/karppa404" className="hover:text-primary  transition-transform duration-100  hover:scale-300" aria-label="social Link">
                            <FaGithub />
                        </a >
                        < a href="https://www.youtube.com/@Karpppa" className="hover:text-primary  transition-transform duration-100  hover:scale-300" aria-label="social Link">
                            <FaYoutube />
                        </a >
                        < a href="https://substack.com/@jottingannon" className="hover:text-primary  transition-transform duration-100  hover:scale-300" aria-label="social Link">
                            <BsSubstack />
                        </a>
                             <a href="https://x.com/OmniKarp" className="hover:text-primary  transition-transform duration-100  hover:scale-300" aria-label="rss feed">
                            <FaTwitterSquare />
                        </a>
                        < a href="/feed.xml" className="hover:text-primary  transition-transform duration-100  hover:scale-300" aria-label="rss feed">
                            <FaRss />
                        </a >

                   
                        <ModeToggle />
                    </div>
                </div>




            </div >

        </div>
    );
}