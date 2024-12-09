import { createContext, useContext, useState, ReactNode } from 'react';

interface BalanceContextType {
  balance: number;
  vipLevel: number;
  updateBalance: (amount: number) => void;
  updateVipLevel: (level: number) => void;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export function BalanceProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(0);
  const [vipLevel, setVipLevel] = useState(0);

  const updateBalance = (amount: number) => {
    setBalance(prev => prev + amount);
  };

  const updateVipLevel = (level: number) => {
    setVipLevel(level);
  };

  return (
    <BalanceContext.Provider value={{ balance, vipLevel, updateBalance, updateVipLevel }}>
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  const context = useContext(BalanceContext);
  if (context === undefined) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
}