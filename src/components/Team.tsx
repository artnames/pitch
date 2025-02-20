
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
              <img 
                src="/lovable-uploads/2e038679-3dba-4034-837e-fc0d3fe6d397.png"
                alt="Portrait"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Arrotu</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="/lovable-uploads/a344c75c-4884-4a12-8e26-63f9f1ff1c47.png"
                alt="Portrait"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Joe</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="/lovable-uploads/8fec67b4-0046-4be2-b4df-b9968f224420.png"
                alt="Portrait"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Frank</h3>
              <p className="text-gray-600">CMO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
