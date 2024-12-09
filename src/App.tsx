import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BalanceProvider } from './context/BalanceContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Recharge from './pages/Recharge';
import Referral from './pages/Referral';
import Withdraw from './pages/Withdraw';
import VIP from './pages/VIP';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <BalanceProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex-1 md:ml-64">
            <Header />
            <main className="pt-24 px-4 md:px-6 pb-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/recharge" element={<Recharge />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/vip" element={<VIP />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </BalanceProvider>
  );
}