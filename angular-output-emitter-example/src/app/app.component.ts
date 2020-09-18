import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { AssetChartComponent} from './asset-chart/asset-chart.component'
import { Asset } from './assets/assets.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-output-emitter-example';

  @ViewChild(AssetChartComponent) assetChart: AssetChartComponent;

  refresh(asset : Asset){
    this.assetChart.refreshChart(asset);
  }
}
