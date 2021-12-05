import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsService } from './services/news.service';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [LayoutComponent, CardComponent],
  providers: [NewsService],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
