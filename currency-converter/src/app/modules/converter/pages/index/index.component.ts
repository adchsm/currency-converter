import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from '../../models/converter.models';
import { getCurrencies } from '../../store/actions/converter.actions';
import {
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
  protected form: FormGroup = this.formBuilder.group({
    amount: [1, [Validators.required, Validators.min(0)]],
    fromCurrency: ['GBP', Validators.required],
    toCurrency: ['EUR', Validators.required],
  });

  protected currencies$: Observable<Currency[] | null> =
    this.store.select(selectCurrenciesData);
  protected currenciesLoading$: Observable<boolean> = this.store.select(
    selectCurrenciesLoading
  );
  protected error$: Observable<any> = this.store.select(selectCurrenciesError);

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.store.dispatch(getCurrencies());
  }

  protected submit(): void {
    console.log('Submitted with ', this.form.value);
  }
}
