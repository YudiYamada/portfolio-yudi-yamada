import AboutClient from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yudi Yamada | Full Stack Experience & Education",
  description:
    "Learn more about Yudi Yamada's professional background as a Full Stack Engineer. Expert in React, Node.js, and Cloud Infrastructure.",
  keywords: [
    "Yudi Yamada experience",
    "Full Stack Engineer Resume",
    "Software Engineering Skills",
  ],
};

export default function AboutPage() {
  return <AboutClient />;
}
