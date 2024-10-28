import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CampaignEvent-card.component.html',
  styleUrls: ['./CampaignEvent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CampaignEvent-card]': 'true'
  }
})

export class CampaignEventCardComponent {


}