// State
export interface ConverterState {
  currencies: DataState<Currency[]>;
  conversion: DataState<Conversion>;
}

export interface DataState<T> {
  loading: boolean;
  data: T | null;
  error: any;
}

// Models
export interface Currency {
  name: string;
  symbol: string;
}

export interface Conversion {
  from: string;
  to: string;
  amount: number;
  result: number;
}

// Responses
export interface SymbolsResponse {
  success: boolean;
  symbols: {
    [key: string]: string;
  };
}

export interface ConvertResponse {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    timestamp: number;
    rate: number;
  };
  historical: boolean;
  date: string;
  result: number;
}
