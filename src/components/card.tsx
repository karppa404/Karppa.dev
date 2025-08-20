export default function Card({ title, description, link }: { title: string, description: string, link: string }) {
    return (
        <a href={link}>

            <div className="w-full h-fit bg-card/30 border-2 border-dashed border-secondary/30 hover:border-primary rounded-xl p-5">
                <h1 className="text-2xl font-bold text-primary">{title}</h1>
                <p className="text-lg font-thin">{description}</p>
            </div>
        </a>
    )
}