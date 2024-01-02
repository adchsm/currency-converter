import { createFeature, createReducer, on } from '@ngrx/store';
import { CONVERTER_CONSTANTS } from '../../constants/converter.constants';
import { ConverterState } from '../../models/converter.models';
import {
  getConversion,
  getConversionFailure,
  getConversionSuccess,
  getCurrencies,
  getCurrenciesFailure,
  getCurrenciesSuccess,
} from '../actions/converter.actions';

export const initialState: ConverterState = {
  currencies: {
    loading: false,
    data: null,
    error: null,
  },
  conversion: {
    loading: false,
    data: null,
    error: null,
  },
};

export const converterFeature = createFeature({
  name: CONVERTER_CONSTANTS.STORE_KEY,
  reducer: createReducer(
    initialState,
    // Currencies
    on(getCurrencies, (state) => ({
      ...state,
      currencies: {
        loading: true,
        data: null,
        error: null,
      },
    })),
    on(getCurrenciesSuccess, (state, { currencies }) => ({
      ...state,
      currencies: {
        loading: false,
        data: currencies,
        error: null,
      },
    })),
    on(getCurrenciesFailure, (state, { error }) => ({
      ...state,
      currencies: {
        loading: false,
        data: null,
        error,
      },
    })),
    // Conversion
    on(getConversion, (state) => ({
      ...state,
      conversion: {
        loading: true,
        data: null,
        error: null,
      },
    })),
    on(getConversionSuccess, (state, { conversion }) => ({
      ...state,
      conversion: {
        loading: false,
        data: { ...conversion },
        error: null,
      },
    })),
    on(getConversionFailure, (state, { error }) => ({
      ...state,
      conversion: {
        loading: false,
        data: null,
        error,
      },
    }))
  ),
});
