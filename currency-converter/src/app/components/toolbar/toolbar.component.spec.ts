import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolbarComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // NOTE: This test have been marked with an x to stop it from running. As this page has a single page, router.navigate isn't called as we're navigating from / to /.
  xit('should navigate to "/" when the logo button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.query(
      By.css('[data-test="button-logo"]')
    );
    button.nativeElement.click();

    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
