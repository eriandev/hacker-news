import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from 'src/app/modules/home/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public author?: string = '';
  @Input() public objectID?: string = '';
  @Input() public createdAt?: string = '';
  @Input() public storyUrl?: string | null = '';
  @Input() public storyTitle?: string | null = '';
  @Input() public isFavorite?: boolean = false;

  @Output() addFav = new EventEmitter<CardData>();
  @Output() unFav = new EventEmitter<string>();

  public favoriteState?: boolean;

  constructor() {
    this.favoriteState = this.isFavorite;
  }

  public toggleFavoriteState(): void {
    this.favoriteState = !this.favoriteState;

    const data: CardData = {
      is_favorite: true,
      author: this.author,
      objectID: this.objectID,
      story_url: this.storyUrl,
      created_at: this.createdAt,
      story_title: this.storyTitle,
    }

    this.favoriteState ? this.addFav.emit(data) : this.unFav.emit(this.objectID)
  }
}
