import { Share2, Users, Gift } from 'lucide-react';

const Referral = () => {
  const referralCode = 'PI78945612';
  const referralLink = `https://picoin.com/ref/${referralCode}`;
  const referralCount = 5;
  const totalEarnings = 250;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Referral Program</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Users className="text-blue-600 mb-2" size={28} />
            <p className="text-sm text-gray-600">Total Referrals</p>
            <p className="text-2xl font-bold text-gray-900">{referralCount}</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <Gift className="text-green-600 mb-2" size={28} />
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-gray-900">${totalEarnings}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Referral Code
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                readOnly
                value={referralCode}
                className="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
              <button
                onClick={() => copyToClipboard(referralCode)}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Referral Link
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
              <button
                onClick={() => copyToClipboard(referralLink)}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;