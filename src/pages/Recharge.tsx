import { useState } from 'react';
import { CreditCard, CheckCircle } from 'lucide-react';

const Recharge = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [processing, setProcessing] = useState(false);

  const amounts = [1000, 2000, 3000, 4000];

  const handleRecharge = async () => {
    setProcessing(true);
    // In a real app, this would make an API call to process the payment
    setTimeout(() => {
      setProcessing(false);
      alert('Recharge successful! Amount will be reflected in your wallet.');
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Recharge Your Wallet</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {amounts.map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className={`p-4 rounded-lg border-2 transition-colors ${
                amount === value
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              ${value}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="text-gray-600" />
              <span>Amount to Pay</span>
            </div>
            <span className="font-semibold">${amount}</span>
          </div>

          <button
            onClick={handleRecharge}
            disabled={processing}
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {processing ? (
              <span className="flex items-center justify-center space-x-2">
                <CheckCircle className="animate-spin" size={20} />
                <span>Processing...</span>
              </span>
            ) : (
              'Proceed to Payment'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recharge;