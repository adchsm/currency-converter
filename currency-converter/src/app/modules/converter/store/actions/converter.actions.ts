import { createAction, props } from '@ngrx/store';
import { CONVERTER_CONSTANTS } from '../../constants/converter.constants';
import { Conversion, Currency } from '../../models/converter.models';

export const getCurrencies = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies`
);

export const getCurrenciesSuccess = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies success`,
  props<{ currencies: Currency[] }>()
);

export const getCurrenciesFailure = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get currencies failure`,
  props<{ error: any }>()
);

export const getConversion = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get conversion`,
  props<{ to: string; from: string; amount: number }>()
);

export const getConversionSuccess = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get conversion success`,
  props<{ conversion: Conversion }>()
);

export const getConversionFailure = createAction(
  `[${CONVERTER_CONSTANTS.STORE_KEY}] get conversion failure`,
  props<{ error: any }>()
);
