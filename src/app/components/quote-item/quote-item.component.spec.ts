import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteItemComponent } from './quote-item.component';

describe('QuoteItemComponent', () => {
  let component: QuoteItemComponent;
  let fixture: ComponentFixture<QuoteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
