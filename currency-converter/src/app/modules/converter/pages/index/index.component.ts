import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrencies } from '../../store/actions/converter.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getCurrencies());
  }
}
