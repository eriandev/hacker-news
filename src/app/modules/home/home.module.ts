import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsService } from './services/news.service';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [LayoutComponent, CardComponent, RelativeTimePipe, SelectComponent],
  providers: [NewsService],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
