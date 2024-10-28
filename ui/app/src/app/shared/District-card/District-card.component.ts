import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './District-card.component.html',
  styleUrls: ['./District-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.District-card]': 'true'
  }
})

export class DistrictCardComponent {


}