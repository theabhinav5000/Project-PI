import { useState } from 'react';
import { Building2, ArrowDownToLine } from 'lucide-react';

const Withdraw = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    ifscCode: '',
    amount: '',
  });

  const availableBalance = 700;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Number(formData.amount) > availableBalance) {
      alert('Insufficient balance!');
      return;
    }

    // In a real app, this would make an API call to process the withdrawal
    alert(`Withdrawal request submitted for $${formData.amount}`);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center space-x-3 mb-6">
          <ArrowDownToLine className="text-blue-600" size={28} />
          <h2 className="text-2xl font-semibold">Withdraw Funds</h2>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600">Available Balance</p>
          <p className="text-2xl font-bold text-gray-900">${availableBalance}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank Account Number
            </label>
            <input
              type="text"
              required
              value={formData.accountNumber}
              onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your account number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              IFSC Code
            </label>
            <input
              type="text"
              required
              value={formData.ifscCode}
              onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter IFSC code"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount to Withdraw
            </label>
            <input
              type="number"
              required
              min="1"
              max={availableBalance}
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Withdrawal Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;