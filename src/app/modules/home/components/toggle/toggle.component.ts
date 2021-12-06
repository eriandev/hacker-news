import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Output() changeView = new EventEmitter<'all' | 'faves'>();

  public ativeOption: string = 'all';

  constructor() {}

  public changeActive(active: 'all' | 'faves'): void {
    this.ativeOption = active;
    this.changeView.emit(active);
  }
}
