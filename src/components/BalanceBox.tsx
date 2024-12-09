import type { BalanceBoxProps } from '../types';

const BalanceBox = ({ title, amount, icon }: BalanceBoxProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold">${amount.toFixed(2)}</p>
    </div>
  );
};

export default BalanceBox;