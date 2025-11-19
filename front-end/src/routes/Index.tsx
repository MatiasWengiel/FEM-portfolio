import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";

interface IndexProps {}

export default function Index(_props: IndexProps) {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  );
}
