import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaExternalLinkAlt } from "react-icons/fa";



interface text {
    title: string,
    desc: string,
    link:string,
}
export default function TextCard({ title, desc,link }: text) {
    return (
        <a href={link}>
            <div className="w-full h-fit flex flex-col p-4 border border-dashed gap-4 rounded-xl hover:border-primary/40 shadow-2xl transition-transform duration-300 hover:scale-110 ">
                <div className="text-xl md:text-4xl font-black inline-flex items-center gap-5 justify-between">
                    <div className="flex gap-4 items-center line-clamp-0 text-ellipsis">

                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/67647083?v=4" />
                        <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                
                     {title.replace('https://github.com/', '')}
                    </div>
                   
                    <FaExternalLinkAlt className="size-5 text-current/30"/>

                </div>
                <div className="text-sm text-primary/30 font-semibold text-justify">
                    {desc}
                </div>

            </div>
        </a>
    )
}