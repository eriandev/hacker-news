import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import topicsJSON from 'src/assets/data/topic-list.json';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  animations: [
    trigger('appearanceAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.2s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.2s ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SelectComponent {
  @Output() changeFav = new EventEmitter<{ selected: string }>();

  @Input() public selected: string | null = 'Select your news';

  public isActive: boolean = false;
  public topics = topicsJSON;

  constructor() {}

  public changeSelected(selected: string): void {
    this.isActive = false;
    this.changeFav.emit({ selected });
  }
}
