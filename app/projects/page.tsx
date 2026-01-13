import { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Portfolio Projects | Yudi Yamada - Full Stack Engineer",
  description:
    "Explore my latest web development projects including Yamada Finance Track, Spotify Clone, and Bewear E-commerce. Specialized in React, Next.js, and Node.js.",
  keywords: [
    "Yudi Yamada Portfolio",
    "Full Stack Projects",
    "React Developer Portfolio",
    "Next.js E-commerce",
    "Financial Dashboard Project",
  ],
};

const Projects = () => {
  return <ProjectsClient />;
};

export default Projects;
