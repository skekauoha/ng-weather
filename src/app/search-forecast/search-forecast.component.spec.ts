import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForecastComponent } from './search-forecast.component';

describe('SearchForecastComponent', () => {
  let component: SearchForecastComponent;
  let fixture: ComponentFixture<SearchForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
