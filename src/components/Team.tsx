
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
          <h2 className="text-5xl font-bold mb-8">Team</h2>
          <p className="text-xl text-gray-600 mb-8">Founder: Arrotu</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Builder / generative artist / community-first creator.
          </p>
          <p className="text-gray-500 mt-4 italic">(Advisors to be added as confirmed.)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
