import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Currency } from '../../models/converter.models';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencySelectComponent {
  @Input() public currencies: Currency[] | null = null;
  @Input() public initialValue: string | null = null;
  @Output() public currencySelectionChange: EventEmitter<string> =
    new EventEmitter();

  public handleSelectionChange(change: MatSelectChange): void {
    this.currencySelectionChange.emit(change.value);
  }
}
