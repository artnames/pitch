
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
          <h2 className="text-5xl font-bold mb-8">Addressing Key Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-purple-500">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Art Creation</h3>
              <p className="text-gray-600">
                Complex tools and technical barriers limit creative expression in digital art
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Digital Identity</h3>
              <p className="text-gray-600">
                Static, text-based identifiers fail to capture the dynamic nature of Web3 identity
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">NFT Creation</h3>
              <p className="text-gray-600">
                Technical complexity prevents many creators from launching NFT collections
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
