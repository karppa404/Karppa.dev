interface text {
    title: string,
    desc: string
}
export default function TextCard({ title, desc }: text) {
    return (
        <div className="w-full h-fit flex flex-col p-4 border gap-4 rounded-xl">
            <div className="text-4xl font-black">{title}</div>
            <hr className="border-dashed " />
            <div className="text-lg font-semibold text-justify">
                {desc}
            </div>

        </div>
    )
}