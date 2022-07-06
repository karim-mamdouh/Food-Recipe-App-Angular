import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodhomeComponent } from './foodhome.component';

describe('FoodhomeComponent', () => {
  let component: FoodhomeComponent;
  let fixture: ComponentFixture<FoodhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
