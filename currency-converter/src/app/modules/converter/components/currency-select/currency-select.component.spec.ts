import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencySelectComponent } from './currency-select.component';

describe('CurrencySelectComponent', () => {
  let component: CurrencySelectComponent;
  let fixture: ComponentFixture<CurrencySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencySelectComponent],
      imports: [MatFormFieldModule, MatSelectModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(CurrencySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the currency symbol when handleSelectionChange is called', () => {
    spyOn(component.currencySelectionChange, 'emit');

    const change = {
      value: 'EUR',
    } as MatSelectChange;

    component.handleSelectionChange(change);

    expect(component.currencySelectionChange.emit).toHaveBeenCalledWith('EUR');
  });
});
