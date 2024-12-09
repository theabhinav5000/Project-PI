import { useState } from 'react';
import { Crown, Shield, Star } from 'lucide-react';
import { useBalance } from '../context/BalanceContext';

const VIP = () => {
  const { balance, vipLevel, updateBalance, updateVipLevel } = useBalance();
  const [processing, setProcessing] = useState(false);

  const vipLevels = [
    { level: 1, price: 1000, icon: Star, benefits: ['10% Bonus on Referrals', 'Priority Support'] },
    { level: 2, price: 3000, icon: Shield, benefits: ['20% Bonus on Referrals', '24/7 Support', 'Exclusive Events'] },
    { level: 3, price: 5000, icon: Crown, benefits: ['30% Bonus on Referrals', 'Personal Account Manager', 'VIP Events', 'Special Rewards'] },
  ];

  const handleUpgrade = async (level: number, price: number) => {
    if (balance < price) {
      alert('Insufficient balance!');
      return;
    }

    setProcessing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateBalance(-price);
      updateVipLevel(level);
      alert(`Successfully upgraded to VIP ${level}!`);
    } catch (error) {
      alert('Failed to upgrade VIP level');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-8">VIP Membership</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vipLevels.map(({ level, price, icon: Icon, benefits }) => (
          <div key={level} className="bg-white rounded-xl shadow-sm p-6 border-2 border-transparent hover:border-blue-500 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">VIP {level}</h3>
              <Icon className={`w-8 h-8 ${level === 1 ? 'text-blue-500' : level === 2 ? 'text-purple-500' : 'text-amber-500'}`} />
            </div>
            
            <p className="text-2xl font-bold mb-4">${price}</p>
            
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleUpgrade(level, price)}
              disabled={processing || vipLevel >= level}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                vipLevel >= level
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {vipLevel >= level ? 'Current Level' : 'Upgrade Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIP;