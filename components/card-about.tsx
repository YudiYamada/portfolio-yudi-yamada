interface CardAboutProps {
  title?: string;
  date?: string;
  institution?: string;
  paragraph?: string;
}

const CardAbout = ({ title, date, institution, paragraph }: CardAboutProps) => {
  return (
    <article className="bg-foreground border-desactive hover:border-primary group inline-block w-full rounded-2xl border-2 p-4 transition-all duration-700 hover:scale-105">
      <h3 className="group-hover:text-primary font-bold transition duration-700 md:text-2xl">
        {title}
      </h3>
      <time className="md:text-xl">{date}</time>
      <p className="group-hover:text-primary mt-2.5 font-semibold transition duration-700 md:text-2xl">
        {institution}
      </p>
      <p className="md:text-xl">{paragraph}</p>
    </article>
  );
};

export default CardAbout;
