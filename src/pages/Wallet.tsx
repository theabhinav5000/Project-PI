import { Wallet as WalletIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import BalanceBox from '../components/BalanceBox';

const Wallet = () => {
  const transactions = [
    { id: 1, type: 'credit', amount: 1000, date: '2024-03-10', description: 'Recharge' },
    { id: 2, type: 'debit', amount: 500, date: '2024-03-09', description: 'Withdrawal' },
    { id: 3, type: 'credit', amount: 200, date: '2024-03-08', description: 'Referral Bonus' },
  ];

  return (
    <div className="space-y-6">
      <BalanceBox
        title="Available Balance"
        amount={700}
        icon={<WalletIcon className="text-blue-600" size={24} />}
      />
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                {tx.type === 'credit' ? (
                  <ArrowUpRight className="text-green-500" size={24} />
                ) : (
                  <ArrowDownRight className="text-red-500" size={24} />
                )}
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
              </div>
              <p className={`font-semibold ${
                tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {tx.type === 'credit' ? '+' : '-'}${tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;