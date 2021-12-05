import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Output() changeFav = new EventEmitter<{ active: string }>();

  public ativeOption: string = 'all';

  constructor() {}

  public changeActive(active: string): void {
    this.ativeOption = active;
    this.changeFav.emit({ active });
  }
}
