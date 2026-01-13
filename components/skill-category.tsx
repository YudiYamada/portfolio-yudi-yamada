import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  subIcon: LucideIcon;
}

export const SkillCategory = ({ title, icon: Icon, skills, subIcon: SubIcon }: SkillCategoryProps) => (
  <section>
    <h3 className="text-primary mt-2.5 mb-4 flex items-center gap-2 font-bold">
      <Icon size={30} />
      <span className="font-bold md:text-2xl">{title}</span>
    </h3>
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {skills.map((skill) => (
        <li key={skill} className="bg-foreground border-desactive hover:border-primary flex items-center gap-2 rounded-[5px] border-2 p-3 transition-all duration-700 hover:scale-105">
          <SubIcon size={18} className="text-primary" />
          <span className="text-sm font-medium md:text-xl">{skill}</span>
        </li>
      ))}
    </ul>
  </section>
);