import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { Conversion, Currency } from '../../models/converter.models';
import {
  getConversion,
  getCurrencies,
} from '../../store/actions/converter.actions';
import {
  selectConversionData,
  selectConversionError,
  selectConversionLoading,
  selectCurrenciesData,
  selectCurrenciesError,
  selectCurrenciesLoading,
} from '../../store/selectors/converter.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  // Currencies
  protected currencies$: Observable<Currency[] | null> =
    this.store.select(selectCurrenciesData);
  protected currenciesLoading$: Observable<boolean> = this.store.select(
    selectCurrenciesLoading
  );
  protected currenciesError$: Observable<any> = this.store.select(
    selectCurrenciesError
  );

  // Conversion
  protected conversion$: Observable<Conversion | null> =
    this.store.select(selectConversionData);
  protected conversionLoading$: Observable<boolean> = this.store.select(
    selectConversionLoading
  );
  protected conversionError$: Observable<any> = this.store.select(
    selectConversionError
  );

  // Form
  protected form: FormGroup = this.formBuilder.group({
    amount: [1, [Validators.required, Validators.min(0)]],
    from: ['GBP', Validators.required],
    to: ['EUR', Validators.required],
  });

  protected disableSubmitButton$: Observable<boolean> = combineLatest([
    this.form.statusChanges.pipe(startWith(this.form.status)),
    this.conversionLoading$,
  ]).pipe(map(([status, loading]) => status === 'INVALID' || !!loading));

  // Class
  constructor(private store: Store, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.store.dispatch(getCurrencies());
  }

  protected submit(): void {
    this.store.dispatch(getConversion(this.form.value));
  }
}
