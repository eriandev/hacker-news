import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsService } from './services/news.service';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

@NgModule({
  declarations: [LayoutComponent, CardComponent, RelativeTimePipe],
  providers: [NewsService],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
