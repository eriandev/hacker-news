import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/modules/home/interfaces/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() public cardsData: CardData[] = [];

  constructor() {}
}
