import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from '../../models/converter.models';
import { getCurrencies } from '../../store/actions/converter.actions';
import { selectCurrenciesData } from '../../store/selectors/converter.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  protected currencies$: Observable<Currency[] | null> =
    this.store.select(selectCurrenciesData);

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getCurrencies());
  }
}
