
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Alex Chen</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Williams</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Zhang</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
