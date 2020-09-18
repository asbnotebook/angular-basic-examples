import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetChartComponent } from './asset-chart.component';

describe('AssetChartComponent', () => {
  let component: AssetChartComponent;
  let fixture: ComponentFixture<AssetChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
