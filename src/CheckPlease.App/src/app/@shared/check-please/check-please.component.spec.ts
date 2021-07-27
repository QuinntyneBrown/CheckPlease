import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPleaseComponent } from './check-please.component';

describe('CheckPleaseComponent', () => {
  let component: CheckPleaseComponent;
  let fixture: ComponentFixture<CheckPleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
