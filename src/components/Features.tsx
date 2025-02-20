
import { motion } from "framer-motion";

const projects = [
  {
    name: "NexArt",
    description: "Generate striking geometric art pieces in just a few clicks",
    color: "purple",
    features: [
      "Instant sharing on Farcaster and Twitter",
      "Seamless NFT minting",
      "50-70% revenue split for creators",
      "User-friendly interface"
    ]
  },
  {
    name: "Artnames",
    description: "Name-service platform with dynamic NFT skins on Base",
    color: "blue",
    features: [
      "Custom name registration",
      "Dynamic NFT skins",
      "Multi-wallet linking",
      "Cross-chain scalability"
    ]
  },
  {
    name: "GenCo",
    description: "Plug-and-play NFT creation platform",
    color: "orange",
    features: [
      "Easy artwork upload",
      "Rarity & traits management",
      "Quick collection launch",
      "Versatile use cases"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our suite of innovative Web3 solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 ${
                project.color === "purple" ? "border-purple-500" :
                project.color === "blue" ? "border-blue-500" :
                "border-orange-500"
              }`}
            >
              <h3 className={`text-3xl font-bold mb-4 ${
                project.color === "purple" ? "text-purple-600" :
                project.color === "blue" ? "text-blue-600" :
                "text-orange-600"
              }`}>{project.name}</h3>
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                      project.color === "purple" ? "bg-purple-500" :
                      project.color === "blue" ? "bg-blue-500" :
                      "bg-orange-500"
                    }`}></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
