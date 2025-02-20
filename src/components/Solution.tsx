
import { motion } from "framer-motion";

const Solution = () => {
  const solutions = [
    {
      name: "NexArt",
      description: "Democratizing digital art creation and distribution through algorithmic generation",
      color: "purple"
    },
    {
      name: "Artnames",
      description: "Reimagining digital identities as dynamic, evolving artworks on the blockchain",
      color: "blue"
    },
    {
      name: "GenCo",
      description: "Empowering creators with code-free NFT collection creation and management",
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
          <h2 className="text-5xl font-bold mb-12">Our Solutions</h2>
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
