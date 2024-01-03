import { CONVERTER_CONSTANTS } from '../../constants/converter.constants';
import {
  mockConversion,
  mockCurrencies,
  mockError,
} from '../../test/converter.mock';
import {
  getConversion,
  getConversionFailure,
  getConversionSuccess,
  getCurrencies,
  getCurrenciesFailure,
  getCurrenciesSuccess,
} from './converter.actions';

describe('converter actions', () => {
  describe('getCurrencies', () => {
    it('should create the getCurrencies action', () => {
      const action = getCurrencies();

      expect(action.type).toEqual(
        `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies`
      );
    });

    it('should create the getCurrenciesSuccess action', () => {
      const action = getCurrenciesSuccess({
        currencies: { ...mockCurrencies },
      });

      expect(action.type).toEqual(
        `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies success`
      );
    });

    it('should create the getCurrenciesFailure action', () => {
      const action = getCurrenciesFailure({ error: mockError });

      expect(action.type).toEqual(
        `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies failure`
      );
    });
  });

  describe('getConversion', () => {
    it('should create the getConversion action', () => {
      const { from, to, amount, ...rest } = mockConversion;
      const action = getConversion({ from, to, amount });

      expect(action.type).toEqual(
        `[${CONVERTER_CONSTANTS.STORE_KEY}] get conversion`
      );
    });

    it('should create the getConversionSuccess action', () => {
      const action = getConversionSuccess({
        conversion: { ...mockConversion },
      });

      expect(action.type).toEqual(
        `[${CONVERTER_CONSTANTS.STORE_KEY}] get conversion success`
      );
    });

    it('should create the getConversionFailure action', () => {
      const action = getConversionFailure({ error: mockError });

      expect(action.type).toEqual(
        `[${CONVERTER_CONSTANTS.STORE_KEY}] get conversion failure`
      );
    });
  });
});
