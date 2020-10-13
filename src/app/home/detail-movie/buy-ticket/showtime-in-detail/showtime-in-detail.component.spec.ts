import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeInDetailComponent } from './showtime-in-detail.component';

describe('ShowtimeInDetailComponent', () => {
  let component: ShowtimeInDetailComponent;
  let fixture: ComponentFixture<ShowtimeInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
