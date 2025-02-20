
import { useRef } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Market from "../components/Market";
import Team from "../components/Team";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white snap-y snap-mandatory">
      <Hero onLearnMore={scrollToFeatures} />
      <div ref={featuresRef}>
        <Features />
      </div>
      <Problem />
      <Solution />
      <Market />
      <Team />
    </main>
  );
};

export default Index;
