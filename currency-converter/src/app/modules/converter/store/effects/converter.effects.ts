import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FixerService } from '../../services/fixer.service';
import {
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
              currencies: Object.entries(symbols).map(([symbol, name]) => ({
                symbol,
                name,
              })),
            })
          ),
          catchError((error) => of(getCurrenciesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private fixerService: FixerService) {}
}
