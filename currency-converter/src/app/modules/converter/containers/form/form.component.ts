import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { Currency } from '../../models/converter.models';
import { getConversion } from '../../store/actions/converter.actions';
import {
  selectConversionLoading,
  selectCurrenciesData,
  selectCurrenciesError,
  selectCurrenciesLoading,
} from '../../store/selectors/converter.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  protected currencies$: Observable<Currency[] | null> =
    this.store.select(selectCurrenciesData);
  protected currenciesLoading$: Observable<boolean> = this.store.select(
    selectCurrenciesLoading
  );
  protected currenciesError$: Observable<any> = this.store.select(
    selectCurrenciesError
  );

  protected conversionLoading$: Observable<boolean> = this.store.select(
    selectConversionLoading
  );

  protected form: FormGroup = this.formBuilder.group({
    amount: [1, [Validators.required, Validators.min(0)]],
    from: ['GBP', Validators.required],
    to: ['EUR', Validators.required],
  });

  protected disableSubmitButton$: Observable<boolean> = combineLatest([
    this.form.statusChanges.pipe(startWith(this.form.status)),
    this.conversionLoading$,
  ]).pipe(map(([status, loading]) => status === 'INVALID' || !!loading));

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  protected handleCurrencySelectionChange(
    symbol: string,
    control: 'from' | 'to'
  ): void {
    this.form.get(control)?.setValue(symbol);
  }

  protected submit(): void {
    this.store.dispatch(getConversion(this.form.value));
  }
}
