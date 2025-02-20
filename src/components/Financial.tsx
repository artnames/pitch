
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Financial = () => {
  const projectionData = [
    {
      quarter: 'Q1',
      mints: 15000,
      revenue: 30000, // 15000 * $2
    },
    {
      quarter: 'Q2',
      mints: 25000,
      revenue: 50000, // 25000 * $2
    },
    {
      quarter: 'Q3',
      mints: 30000,
      revenue: 60000, // 30000 * $2
    },
    {
      quarter: 'Q4',
      mints: 30000,
      revenue: 60000, // 30000 * $2
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
          <h2 className="text-5xl font-bold mb-6">Financial Projections</h2>
          <p className="text-xl text-gray-600 mb-12">Artnames Revenue Model</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Revenue Targets</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">Target: 100,000 ArtNames minted in year one</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">Initial revenue projection: $200K at $2 per mint</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Recurring Revenue</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">Annual expiration model drives renewals</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span className="text-gray-700">Sustainable long-term revenue through renewal fees</span>
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
          <h3 className="text-2xl font-bold mb-6 text-center">Year 1 Quarterly Projections</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" orientation="left" stroke="#2563eb" />
                <YAxis yAxisId="right" orientation="right" stroke="#6366f1" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="mints" fill="#2563eb" name="Mints" />
                <Bar yAxisId="right" dataKey="revenue" fill="#6366f1" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Financial;
