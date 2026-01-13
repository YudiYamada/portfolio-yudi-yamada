interface HeaderSectionProps {
  title: string;
  highlight: string;
  description: string;
}

export const HeaderSection = ({
  title,
  highlight,
  description,
}: HeaderSectionProps) => (
  <div className="mb-5">
    <h1 className="text-2xl font-bold md:text-5xl">
      {title} <span className="text-primary">{highlight}</span>
    </h1>
    <p className="md:text-[20px]">{description}</p>
  </div>
);
