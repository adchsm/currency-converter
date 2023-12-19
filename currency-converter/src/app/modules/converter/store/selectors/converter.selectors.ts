import { createSelector } from '@ngrx/store';
import { ConverterState } from '../../models/converter.models';

export const selectConverter = (state: any): ConverterState => state.converter;

export const selectCurrenciesState = createSelector(
  selectConverter,
  (state) => state.currencies
);

export const selectCurrenciesLoading = createSelector(
  selectCurrenciesState,
  (state) => state.loading
);

export const selectCurrenciesData = createSelector(
  selectCurrenciesState,
  (state) => state.data
);

export const selectCurrenciesError = createSelector(
  selectCurrenciesState,
  (state) => state.error
);
