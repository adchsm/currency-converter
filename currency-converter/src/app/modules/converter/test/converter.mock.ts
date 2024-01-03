import {
  Conversion,
  ConvertResponse,
  Currency,
  SymbolsResponse,
} from '../models/converter.models';

export const mockCurrencies: Currency[] = [
  {
    name: 'British Pound Sterling',
    symbol: 'GBP',
  },
  {
    name: 'Euro',
    symbol: 'EUR',
  },
  {
    name: 'United States Dollar',
    symbol: 'USD',
  },
];

export const mockSymbolsResponse: SymbolsResponse = {
  success: true,
  symbols: {
    GBP: 'British Pound Sterling',
    EUR: 'Euro',
    USD: 'United States Dollar',
  },
};

export const mockConversion: Conversion = {
  from: 'GBP',
  to: 'EUR',
  amount: 1,
  result: 1.15,
};

export const mockConvertResponse: ConvertResponse = {
  success: true,
  query: {
    from: 'GBP',
    to: 'EUR',
    amount: 1,
  },
  info: {
    timestamp: 1234567890,
    rate: 1.15,
  },
  historical: false,
  date: '2024/1/4',
  result: 1.15,
};

export const mockError = new Error();
