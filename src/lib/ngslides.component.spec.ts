import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgslidesComponent } from './ngslides.component';

describe('NgslidesComponent', () => {
  let component: NgslidesComponent;
  let fixture: ComponentFixture<NgslidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgslidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgslidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
