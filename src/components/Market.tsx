
import { motion } from "framer-motion";

const Market = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-2 text-purple-600">NexArt</h3>
              <p className="text-gray-600">Tapping into the growing algorithmic art market with social-first sharing</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-2 text-blue-600">ArtNames</h3>
              <p className="text-gray-600">Revolutionizing digital identity across multiple chains with dynamic NFT integration</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-2 text-orange-600">NexMint</h3>
              <p className="text-gray-600">Simplifying NFT creation for the next wave of digital creators</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
