import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [RelativeTimePipe, ClickOutsideDirective],
  imports: [CommonModule],
  exports: [RelativeTimePipe, ClickOutsideDirective],
})
export class SharedModule {}
