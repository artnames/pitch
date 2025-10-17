
import { motion } from "framer-motion";

const Solution = () => {
  const solutions = [
    {
      name: "Four Creation Modes",
      description: "Code Mode, SoundArt (only sound-to-curated-art on-chain), Geo Shapes, and Noise — all live and accessible",
      color: "purple"
    },
    {
      name: "Free to Publish",
      description: "No upfront cost or gas fees. Creators keep 60% of every mint. Seamless email login + smart wallet onboarding",
      color: "blue"
    },
    {
      name: "Foundation Pool",
      description: "Funds onboarding of traditional artists into Web3, bridging the gap between traditional and digital art",
      color: "orange"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12">Solution (NexArt)</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className={`p-8 rounded-2xl ${
                solution.color === "purple" ? "bg-purple-50" :
                solution.color === "blue" ? "bg-blue-50" :
                "bg-orange-50"
              }`}>
                <h3 className={`text-2xl font-semibold mb-4 ${
                  solution.color === "purple" ? "text-purple-600" :
                  solution.color === "blue" ? "text-blue-600" :
                  "text-orange-600"
                }`}>{solution.name}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
