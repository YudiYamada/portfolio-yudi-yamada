import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface HeaderProjectsProps {
  number: string;
  title: string;
  description: string;
  tecnologies: string;
  online: string;
  github: string;
}

const HeaderProjects = ({
  number,
  title,
  description,
  tecnologies,
  online,
  github,
}: HeaderProjectsProps) => {
  return (
    <article className="space-y-5">
      <span className="text-7xl font-black text-transparent [-webkit-text-stroke:2px_#ffffff] [text-stroke:2px_var(--color-primary)]">
        {number}
      </span>
      <h2 className="text-2xl font-bold md:text-5xl">{title}</h2>
      <p className="md:text-xl">{description}</p>
      <p className="text-primary md:text-xl">{tecnologies}</p>
      <div className="border-t-desactive flex items-center justify-center gap-6 border-t-2 pt-6">
        <Link
          href={online}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} - Online`}
          className="bg-foreground border-desactive hover:text-primary hover:border-primary rounded-full border-2 p-5 transition-all duration-700 hover:scale-105 hover:cursor-pointer"
        >
          <ArrowUpRight />
        </Link>
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} - GitHub`}
          className="bg-foreground border-desactive hover:text-primary hover:border-primary rounded-full border-2 p-5 transition-all duration-700 hover:scale-105 hover:cursor-pointer"
        >
          <Github />
        </Link>
      </div>
    </article>
  );
};

export default HeaderProjects;
