import { Wallet, PiggyBank } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FeatureSlider from '../components/FeatureSlider';
import BalanceBox from '../components/BalanceBox';

const Dashboard = () => {
  const chartData = [
    { name: 'Jan', value: 1000 },
    { name: 'Feb', value: 1500 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2800 },
    { name: 'May', value: 3200 },
    { name: 'Jun', value: 4000 },
  ];

  return (
    <div className="space-y-6">
      <FeatureSlider />
      
      <div className="grid grid-cols-2 gap-6">
        <BalanceBox
          title="Available Balance"
          amount={2500}
          icon={<Wallet className="text-blue-600" size={24} />}
        />
        <BalanceBox
          title="Total Balance"
          amount={4000}
          icon={<PiggyBank className="text-green-600" size={24} />}
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">PI Coin Value Growth</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;