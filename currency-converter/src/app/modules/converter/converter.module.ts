import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ConverterRoutingModule } from './converter-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { converterFeature } from './store/reducers/converter.reducers';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    StoreModule.forFeature(converterFeature),
  ],
})
export class ConverterModule {}
