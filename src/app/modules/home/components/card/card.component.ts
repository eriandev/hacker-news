import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public author: string = '';
  @Input() public storyUrl: string = '';
  @Input() public createdAt: string = '';
  @Input() public storyTitle: string = '';
  @Input() public createdAtId: number = 0;
  @Input() public isFavorite: boolean = false;

  @Output() changeFav = new EventEmitter<{ id: number; fav: boolean }>();
  public favoriteState: boolean;

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
