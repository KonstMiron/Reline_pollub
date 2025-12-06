import { Hero } from "./Hero";
import { Header } from "@/widgets/header";
import { LaserSection } from "./LaserSection";
import { AboutSection } from "./AboutSection";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Header />
      <LaserSection />
      <AboutSection />
    </>
  );
};