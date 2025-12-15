import Hero from "./Hero";
import Header from "@/widgets/header";
import LaserSection from "./LaserSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Header />
      <LaserSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;