import { Injectable } from '@angular/core';
import { CardData } from '../interfaces/card';

@Injectable()
export class FavoritesService {
  private readonly STORE_FAVS = 'my-faves';

  constructor() {}

  public setFavorite(newFav: CardData): void {
    const favorites = this.getAllFavorites();
    window.localStorage.setItem(this.STORE_FAVS, JSON.stringify(favorites ? [...favorites, newFav] : [newFav]));
  }

  public getAllFavorites(): CardData[] | null {
    const favoriteNews = window.localStorage.getItem(this.STORE_FAVS);
    return favoriteNews ? JSON.parse(favoriteNews) : null;
  }
}
