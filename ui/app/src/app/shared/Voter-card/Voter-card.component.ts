import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Voter-card.component.html',
  styleUrls: ['./Voter-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Voter-card]': 'true'
  }
})

export class VoterCardComponent {


}