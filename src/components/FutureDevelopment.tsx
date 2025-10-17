
import { motion } from "framer-motion";
import { Rocket, Layers, ShoppingCart } from "lucide-react";

const FutureDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Competitive Advantage & Roadmap</h2>
          <p className="text-xl text-gray-600">What Sets NexArt Apart</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Competitive Advantages</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>4 creation modes live; 2 more coming (ArtNames & ByX)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>SoundArt: only sound-to-curated-art platform on-chain</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Free publishing + 60% creator royalties</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Foundation Pool bridges traditional artists</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Gasless onboarding removes crypto friction</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Equal visibility: every creator featured instantly</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Roadmap</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                <span><strong>Q4 2025:</strong> Launch ArtNames mode</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                <span><strong>Q1 2026:</strong> Launch ByX mode — curated multi-randomness collections</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                <span><strong>2026:</strong> Launch NexMint — code-free NFT collection creation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                <span>Expand Foundation Pool for traditional artist onboarding</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                <span>Mobile optimization for global access</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                <span><strong>2026+:</strong> Multichain expansion (Polygon, Tezos, Solana)</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Long-term Vision</h3>
          <p className="text-xl text-gray-700 italic">
            "Behance for on-chain generative art"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureDevelopment;
