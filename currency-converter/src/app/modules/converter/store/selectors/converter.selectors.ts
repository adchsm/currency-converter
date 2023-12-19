import { ConverterState } from '../../models/converter.models';

export const selectConverter = (state: any): ConverterState => state.converter;
