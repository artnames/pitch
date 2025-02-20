
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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Innovation in Web3
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="text-3xl md:text-4xl font-semibold text-purple-600">NexArt</span>
          <span className="text-3xl md:text-4xl font-semibold text-blue-600">Artnames</span>
          <span className="text-3xl md:text-4xl font-semibold text-orange-600">GenCo</span>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          "Building the future of digital creativity, identity, and ownership"
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
