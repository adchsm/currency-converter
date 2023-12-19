import { createAction, props } from '@ngrx/store';
import { CONVERTER_CONSTANTS } from '../../constants/converter.constants';
import { Currency } from '../../models/converter.models';

export const getCurrencies = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] currencies symbols`
);

export const getCurrenciesSuccess = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies success`,
  props<{ currencies: Currency[] }>()
);

export const getCurrenciesFailure = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies failure`,
  props<{ error: any }>()
);
