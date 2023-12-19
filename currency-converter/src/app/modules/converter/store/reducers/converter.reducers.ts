import { createFeature, createReducer, on } from '@ngrx/store';
import { CONVERTER_CONSTANTS } from '../../constants/converter.constants';
import { ConverterState } from '../../models/converter.models';
import {
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
};

export const converterFeature = createFeature({
  name: CONVERTER_CONSTANTS.STORE_KEY,
  reducer: createReducer(
    initialState,
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
    }))
  ),
});
