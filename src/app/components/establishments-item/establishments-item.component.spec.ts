import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsItemComponent } from './establishments-item.component';

describe('EstablishmentsItemComponent', () => {
  let component: EstablishmentsItemComponent;
  let fixture: ComponentFixture<EstablishmentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
