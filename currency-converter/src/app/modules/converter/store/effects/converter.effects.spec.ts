import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { FixerService } from '../../services/fixer.service';
import {
  mockConversion,
  mockConvertResponse,
  mockCurrencies,
  mockSymbolsResponse,
} from '../../test/converter.mock';
import {
  getConversion,
  getConversionFailure,
  getConversionSuccess,
  getCurrencies,
  getCurrenciesFailure,
  getCurrenciesSuccess,
} from '../actions/converter.actions';
import { ConverterEffects } from './converter.effects';

describe('ConverterEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: ConverterEffects;
  let store: Store;
  let fixerService: FixerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [
        ConverterEffects,
        provideMockActions(() => actions$),
        provideMockStore({}),
        HttpClient,
        FixerService,
      ],
    });

    effects = TestBed.inject(ConverterEffects);
    store = TestBed.inject(Store);
    fixerService = TestBed.inject(FixerService);
  });

  describe('getCurrencies$', () => {
    it('should dispatch a getCurrenciesSuccess action after a successful api call', () => {
      spyOn(fixerService, 'getCurrencies').and.returnValue(
        of({ ...mockSymbolsResponse })
      );

      actions$ = hot('-a---', { a: getCurrencies() });

      const expected = cold('-a---', {
        a: getCurrenciesSuccess({ currencies: [...mockCurrencies] }),
      });

      expect(effects.getCurrencies$).toBeObservable(expected);
    });

    it('should dispatch a getCurrenciesError action after a failed api call', () => {
      spyOn(fixerService, 'getCurrencies').and.returnValue(
        throwError(() => new Error(''))
      );

      actions$ = hot('-a---', { a: getCurrencies() });

      const expected = cold('-a---', {
        a: getCurrenciesFailure({ error: new Error('') }),
      });

      expect(effects.getCurrencies$).toBeObservable(expected);
    });
  });

  describe('getConversion$', () => {
    it('should dispatch a getConversionSuccess action after a successful api call', () => {
      spyOn(fixerService, 'getConversion').and.returnValue(
        of({ ...mockConvertResponse })
      );

      const { from, to, amount, ...rest } = mockConversion;
      actions$ = hot('-a---', { a: getConversion({ from, to, amount }) });

      const expected = cold('-a---', {
        a: getConversionSuccess({ conversion: { ...mockConversion } }),
      });

      expect(effects.getConversion$).toBeObservable(expected);
    });

    it('should dispatch a getConversionError action after a failed api call', () => {
      spyOn(fixerService, 'getConversion').and.returnValue(
        throwError(() => new Error(''))
      );

      const { from, to, amount, ...rest } = mockConversion;
      actions$ = hot('-a---', { a: getConversion({ from, to, amount }) });

      const expected = cold('-a---', {
        a: getConversionFailure({ error: new Error('') }),
      });

      expect(effects.getConversion$).toBeObservable(expected);
    });
  });
});
