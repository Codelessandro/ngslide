import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpresComponent } from './ngpres.component';

describe('NgpresComponent', () => {
  let component: NgpresComponent;
  let fixture: ComponentFixture<NgpresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgpresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
