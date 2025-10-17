
import { useRef } from "react";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Features from "../components/Features";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Market from "../components/Market";
import Financial from "../components/Financial";
import FutureDevelopment from "../components/FutureDevelopment";
import Team from "../components/Team";
import Closing from "../components/Closing";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white snap-y snap-mandatory">
      <Hero onLearnMore={scrollToFeatures} />
      <Vision />
      <div ref={featuresRef}>
        <Features />
      </div>
      <Problem />
      <Solution />
      <Market />
      <Financial />
      <FutureDevelopment />
      <Team />
      <Closing />
    </main>
  );
};

export default Index;
