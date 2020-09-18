import { Component, Output, EventEmitter } from '@angular/core';

export interface Asset {
  equity: number;
  debt: number;
  mutualFund: number;
}

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent {

  asset: Asset = { equity: 0, debt: 0, mutualFund: 0 };
  @Output('calculate-asset') calculateEvent: EventEmitter<Asset> = new EventEmitter<Asset>();

  constructor() { }

  drawChart() {
    this.calculateEvent.emit(this.asset);
  }
}
