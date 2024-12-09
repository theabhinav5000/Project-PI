import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  RefreshCw, 
  Users, 
  ArrowDownToLine,
  CircleUser,
  Crown
} from 'lucide-react';

const Sidebar = () => {
  const [userId] = useState('PI78945612');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/wallet', icon: <Wallet size={20} />, label: 'Wallet' },
    { path: '/recharge', icon: <RefreshCw size={20} />, label: 'Recharge' },
    { path: '/referral', icon: <Users size={20} />, label: 'Referral' },
    { path: '/withdraw', icon: <ArrowDownToLine size={20} />, label: 'Withdraw' },
    { path: '/vip', icon: <Crown size={20} />, label: 'VIP' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-gray-900 text-white rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`
        fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 transition duration-200 ease-in-out
        w-64 bg-gray-900 text-white z-10
      `}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center p-4">
            <CircleUser size={64} className="text-blue-400 mb-2" />
            <span className="text-sm text-gray-400">ID: {userId}</span>
          </div>
          
          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;