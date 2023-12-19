export interface ConverterState {
  currencies: DataState<Currency[]>;
}

export interface DataState<T> {
  loading: boolean;
  data: T | null;
  error: any;
}

export interface SymbolsResponse {
  success: boolean;
  symbols: {
    [key: string]: string;
  };
}

export interface Currency {
  name: string;
  symbol: string;
}
