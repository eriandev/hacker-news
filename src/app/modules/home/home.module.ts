import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsService } from './services/news.service';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { SelectComponent } from './components/select/select.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent,
    RelativeTimePipe,
    SelectComponent,
    ClickOutsideDirective,
    ToggleComponent,
  ],
  providers: [NewsService],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
