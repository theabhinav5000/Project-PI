import { Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBalance } from '../context/BalanceContext';
import VipBadge from './VipBadge';

const Header = () => {
  const { vipLevel } = useBalance();

  return (
    <header className="bg-white shadow-sm fixed top-0 right-0 md:left-64 left-0 h-16 z-10">
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Coins className="h-8 w-8 text-blue-600" />
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-gray-800">PI Coin</h1>
            <VipBadge level={vipLevel} />
          </div>
        </div>
        
        <div className="flex space-x-2 md:space-x-4">
          <Link
            to="/login"
            className="px-3 md:px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;