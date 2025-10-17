
import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">Problem</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-purple-500">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Intimidating Platforms</h3>
              <p className="text-gray-600">
                Web3 art platforms remain intimidating: wallets, gas fees, and jargon
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Artist Exclusion</h3>
              <p className="text-gray-600">
                Traditional artists are excluded from digital art ecosystems
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">Limited Visibility</h3>
              <p className="text-gray-600">
                Most NFT platforms promote only top creators, not newcomers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
