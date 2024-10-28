import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Sponsorship-card.component.html',
  styleUrls: ['./Sponsorship-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Sponsorship-card]': 'true'
  }
})

export class SponsorshipCardComponent {


}