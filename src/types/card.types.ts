export interface CreditCard {
  id: string;
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  type: 'Primary' | 'Secondary';
  bank: 'DBL Bank' | 'BRC Bank' | 'ABM Bank' | 'MCP Bank';
}

export interface CardSettings {
  icon: React.ReactNode;
  title: string;
  description: string;
} 