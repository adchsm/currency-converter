import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConversionComponent } from './containers/conversion/conversion.component';
import { FormComponent } from './containers/form/form.component';
import { ConverterRoutingModule } from './converter-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ConverterEffects } from './store/effects/converter.effects';
import { converterFeature } from './store/reducers/converter.reducers';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';

@NgModule({
  declarations: [IndexComponent, FormComponent, ConversionComponent, CurrencySelectComponent],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,

    // Dependencies
    StoreModule.forFeature(converterFeature),
    EffectsModule.forFeature(ConverterEffects),

    // Module
    ConverterRoutingModule,
  ],
})
export class ConverterModule {}
