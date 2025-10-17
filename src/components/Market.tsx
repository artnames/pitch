
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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4 text-purple-600">$12B+ NFT Market</h3>
              <p className="text-gray-600">NFT art sales to date with explosive growth in no-code creative tools</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4 text-blue-600">Millions Untapped</h3>
              <p className="text-gray-600">Millions of traditional artists yet to join Web3</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-orange-600">Base Chain Growth</h3>
              <p className="text-gray-600">Base chain adoption accelerating consumer-friendly dApps</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
