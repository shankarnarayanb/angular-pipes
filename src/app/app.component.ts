import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  date: string;
  amount: number;
  distance: number;
  mesurementType: string;



  onNameChange(value: string) {

    this.name = value;

  }


  onDateChange(value: string) {

    this.date = value;

  }


  onAmountChange(value: string) {

    this.amount = parseFloat(value);

  }

  onDistanceChange(value: string) {

    this.distance = parseFloat(value);
    this.mesurementType = "Kilometers"

  }

}
