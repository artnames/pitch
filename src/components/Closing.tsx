
import { motion } from "framer-motion";

const Closing = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/lovable-uploads/13fbe3cd-7016-4a53-be8e-05a7dfb4d5e9.png"
            alt="NexArt Logo"
            className="h-32 mb-8 mx-auto"
          />
          <h2 className="text-5xl font-bold mb-8">Closing Vision</h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            "NexArt.xyz has launched its token, built a foundation to onboard traditional artists, 
            and continues expanding creative possibilities. We're building the future of generative art — 
            <span className="text-blue-600 font-semibold"> free to create, rewarding to publish, and accessible to everyone.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Closing;
