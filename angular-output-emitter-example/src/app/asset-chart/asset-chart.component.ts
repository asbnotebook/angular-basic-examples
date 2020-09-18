import { Component } from '@angular/core';
import { Asset } from '../assets/assets.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-asset-chart',
  templateUrl: './asset-chart.component.html',
  styleUrls: ['./asset-chart.component.css']
})
export class AssetChartComponent {
  chart: any;

  constructor() { }

  asset: Asset;
  chartDataInPercentage = [];
  total = 0;

  percentage(num: number): number {
    let percentage = (num/this.total) * 100;
    return Math.round(percentage * 100) / 100;
  }

  refreshChart(asset: Asset) {
    this.asset = asset;
    this.total = this.asset.debt + this.asset.equity + this.asset.mutualFund;
    this.chartDataInPercentage = [this.percentage(this.asset.debt),
      this.percentage(this.asset.equity),
      this.percentage(this.asset.mutualFund)];

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: ['Debt %', 'Equity %', 'Mutual Funds %'],
        datasets: [
          {
            data: this.chartDataInPercentage,
            borderColor: '#3cba9f',
            backgroundColor: [
              "Green",
              "Red",
              "Orange"
            ],
            fill: true
          }
        ]
      }
    });
  }
}
