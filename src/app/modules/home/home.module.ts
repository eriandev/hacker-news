import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsService } from './services/news.service';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  providers: [NewsService],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
