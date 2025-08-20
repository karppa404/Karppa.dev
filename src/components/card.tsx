import type { IconType } from "react-icons"; // Use IconType, not IconTree

interface CardProps {
  title: string;
  description: string;
  link: string;
  icon?: IconType; // optional icon component
}

export default function Card({ title, description, link, icon: Icon }: CardProps) {
  return (
    <a href={link}>
      <div className="w-full h-fit bg-card/30 border-2 border-dashed border-secondary/30 hover:border-primary rounded-xl p-5 flex items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-primary inline-flex gap-2">        {Icon && <Icon className="text-primary text-2xl" />} {/* render icon if provided */}
{title}</h1>
          <p className="text-lg font-thin">{description}</p>
        </div>
      </div>
    </a>
  );
}
