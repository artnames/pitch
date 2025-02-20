
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
          <h2 className="text-5xl font-bold mb-8">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold mb-2">$50B+</h3>
              <p className="text-gray-600">Digital Art Market</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold mb-2">500M+</h3>
              <p className="text-gray-600">Content Creators</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold mb-2">25%</h3>
              <p className="text-gray-600">Annual Growth Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
