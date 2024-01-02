import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Conversion } from '../../models/converter.models';
import {
  selectConversionData,
  selectConversionError,
  selectConversionLoading,
} from '../../store/selectors/converter.selectors';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversionComponent {
  protected conversion$: Observable<Conversion | null> =
    this.store.select(selectConversionData);
  protected conversionLoading$: Observable<boolean> = this.store.select(
    selectConversionLoading
  );
  protected conversionError$: Observable<any> = this.store.select(
    selectConversionError
  );

  constructor(private store: Store) {}
}
