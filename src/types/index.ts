export interface User {
  id: string;
  email: string;
  balance: number;
  totalBalance: number;
  referralCode: string;
  referralCount: number;
  referralRewards: number;
  bankDetails?: {
    accountNumber: string;
    ifscCode: string;
  };
}

export interface SliderItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface BalanceBoxProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
}

export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}