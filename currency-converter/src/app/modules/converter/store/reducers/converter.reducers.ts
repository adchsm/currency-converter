import { createFeature, createReducer } from '@ngrx/store';
import { CONVERTER_CONSTANTS } from '../../constants/converter.constants';
import { ConverterState } from '../../models/converter.models';

export const initialState: ConverterState = {};

export const converterFeature = createFeature({
  name: CONVERTER_CONSTANTS.STORE_KEY,
  reducer: createReducer(initialState),
});
