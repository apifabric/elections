import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Party-card.component.html',
  styleUrls: ['./Party-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Party-card]': 'true'
  }
})

export class PartyCardComponent {


}