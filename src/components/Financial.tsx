
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Financial = () => {
  const projectionData = [
    {
      metric: 'Current',
      transactions: 10000,
      creators: 150,
    },
    {
      metric: 'End 2026',
      transactions: 84000,
      creators: 500,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6">Traction & Financial Projections</h2>
          <p className="text-xl text-gray-600 mb-12">NexArt Growth Metrics</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Current Traction</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">150+ unique creators onboarded</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">1,400+ artworks published</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">10,000+ art-generation transactions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">0.55 ETH (~$2,500) paid out to creators</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Business Model</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">Mint fee: 0.0005 ETH per mint (~$0.80–$1)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">60% to creators / 40% to NexArt</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">$NEXA token live for creator rewards & governance</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">Foundation Pool funds artist onboarding</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Growth Projections (Conservative)</h3>
          <div className="mb-8 text-center space-y-2">
            <p className="text-lg text-gray-700">
              <strong>By end of 2026:</strong> ≈70K art-generation transactions (+7× growth)
            </p>
            <p className="text-lg text-gray-700">
              ≈14K additional mints from ArtNames • ≈84K total mints
            </p>
            <p className="text-lg text-gray-700">
              Projected volume: ≈42 ETH ≈ $70K
            </p>
            <p className="text-lg text-gray-700">
              Creator payouts: ≈25 ETH (60%) • NexArt revenue: ≈17 ETH (40%)
            </p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis yAxisId="left" orientation="left" stroke="#2563eb" />
                <YAxis yAxisId="right" orientation="right" stroke="#6366f1" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="transactions" fill="#2563eb" name="Transactions" />
                <Bar yAxisId="right" dataKey="creators" fill="#6366f1" name="Creators" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Financial;
