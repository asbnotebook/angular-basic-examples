import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssetsComponent } from './assets/assets.component';
import { FormsModule } from '@angular/forms';
import { AssetChartComponent } from './asset-chart/asset-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AssetChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
