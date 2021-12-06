import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public author?: string = '';
  @Input() public storyUrl?: string | null = '';
  @Input() public createdAt?: string | null = '';
  @Input() public storyTitle?: string | null = '';
  @Input() public createdAtId?: number | null = 0;
  @Input() public isFavorite?: boolean = false;

  @Output() changeFav = new EventEmitter<{ id?: number | null; fav: boolean }>();

  public favoriteState?: boolean;

  constructor() {
    this.favoriteState = this.isFavorite;
  }

  public toggleFavoriteState(): void {
    this.favoriteState = !this.favoriteState;
    this.changeFav.emit({
      id: this.createdAtId,
      fav: this.favoriteState,
    });
  }
}
