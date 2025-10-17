
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">Vision</h2>
          <p className="text-3xl md:text-4xl font-semibold text-gray-700 leading-relaxed">
            "Turn anyone into a generative artist with just an email.
            <br />
            <span className="text-blue-600">Accessible, rewarding, and social.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
