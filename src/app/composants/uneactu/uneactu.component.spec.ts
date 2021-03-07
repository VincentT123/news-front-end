import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneactuComponent } from './uneactu.component';

describe('UneactuComponent', () => {
  let component: UneactuComponent;
  let fixture: ComponentFixture<UneactuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneactuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneactuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
