import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPaisComponent } from './ngrx-pais.component';

describe('NgrxPaisComponent', () => {
  let component: NgrxPaisComponent;
  let fixture: ComponentFixture<NgrxPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
