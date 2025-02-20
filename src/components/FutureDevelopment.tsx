
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
          <h2 className="text-5xl font-bold mb-6">Future Development</h2>
          <p className="text-xl text-gray-600">Expanding the Artnames Ecosystem</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Artist Collaborations</h3>
            <p className="text-gray-600">
              Introducing limited edition names through exclusive partnerships with renowned artists, creating unique digital collectibles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Blockchain Expansion</h3>
            <p className="text-gray-600">
              Exploring integration with additional blockchain networks to provide expanded minting options and wider accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Marketplace Launch</h3>
            <p className="text-gray-600">
              Development of a dedicated marketplace platform for seamless trading and transfer of ArtNames between users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureDevelopment;
