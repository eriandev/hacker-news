import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from 'src/app/modules/home/interfaces/card';
import { StorageService } from 'src/app/modules/shared/services/storage.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Output() public removedFav = new EventEmitter<string>();
  @Input() public cardsData: Array<CardData> = [];

  constructor(private readonly storageService: StorageService) {}

  public addFavNew(newFav: CardData) {
    this.storageService.setInArray<CardData>('favorites', newFav);
  }

  public removeFavNew(objectID: string) {
    this.removedFav.emit(objectID);
    const currentFavorites = this.storageService.get<CardData[]>('favorites');
    if (currentFavorites) {
      const selectedFavorites = currentFavorites.filter((fav) => fav.objectID !== objectID);
      this.storageService.set<CardData[]>('favorites', selectedFavorites);
    }
  }
}
