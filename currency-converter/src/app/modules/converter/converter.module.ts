import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConverterRoutingModule } from './converter-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ConverterEffects } from './store/effects/converter.effects';
import { converterFeature } from './store/reducers/converter.reducers';
import { FormComponent } from './containers/form/form.component';
import { ConversionComponent } from './containers/conversion/conversion.component';

@NgModule({
  declarations: [IndexComponent, FormComponent, ConversionComponent],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Dependencies
    StoreModule.forFeature(converterFeature),
    EffectsModule.forFeature(ConverterEffects),

    // Module
    ConverterRoutingModule,
  ],
})
export class ConverterModule {}
