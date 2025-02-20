
import { motion } from "framer-motion";

const Solution = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">Our Solution</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Artnames Platform</h3>
            <ul className="text-left space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                <span>Decentralized identity verification for creators</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                <span>Blockchain-based ownership certification</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                <span>Cross-platform integration capabilities</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
