
import { motion } from "framer-motion";

interface HeroProps {
  onLearnMore: () => void;
}

const Hero = ({ onLearnMore }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <img 
          src="/lovable-uploads/13fbe3cd-7016-4a53-be8e-05a7dfb4d5e9.png"
          alt="ArtNames Logo"
          className="h-24 md:h-32 mb-8 mx-auto"
        />
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          NexArt.xyz
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Generative Art for Everyone, On-Chain
        </p>
        <p className="text-xl md:text-2xl text-gray-600">
          Founder: Arrotu
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12"
      >
        <button 
          onClick={onLearnMore}
          className="px-8 py-3 bg-black text-white rounded-full font-medium transition-transform hover:scale-105"
        >
          Explore Our Projects
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
