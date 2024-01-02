import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FixerService } from '../../services/fixer.service';
import {
  getConversion,
  getConversionFailure,
  getConversionSuccess,
  getCurrencies,
  getCurrenciesFailure,
  getCurrenciesSuccess,
} from '../actions/converter.actions';

@Injectable()
export class ConverterEffects {
  getCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrencies),
      exhaustMap(() =>
        this.fixerService.getCurrencies().pipe(
          map(({ symbols }) =>
            getCurrenciesSuccess({
              currencies: Object.entries(symbols)
                .map(([symbol, name]) => ({
                  symbol,
                  name,
                }))
                .sort((a, b) => a.name.localeCompare(b.name)),
            })
          ),
          catchError((error) => of(getCurrenciesFailure({ error })))
        )
      )
    )
  );

  getConversion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getConversion),
      exhaustMap(({ from, to, amount }) =>
        this.fixerService.getConversion(from, to, amount).pipe(
          map(({ result }) =>
            getConversionSuccess({ conversion: { from, to, amount, result } })
          ),
          catchError((error) => of(getConversionFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private fixerService: FixerService) {}
}
