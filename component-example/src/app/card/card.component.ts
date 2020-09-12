import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor() { }

  private _name: String;
  private _timeInMinutes: number;

  @Input('card_name')
  set name(name: String) {
    if (name === '')
      name = 'No Title';
    this._name = name;
  }

  get name(): String {
    return this._name;
  }

  @Input('read_time')
  set timeInMinutes(readTime: number) {
    if (isNaN(readTime))
      this._timeInMinutes = 0;
    this._timeInMinutes = readTime;
  }
  get timeInMinutes(): number {
    return this._timeInMinutes;
  }
}
